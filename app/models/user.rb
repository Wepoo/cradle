class User < ActiveRecord::Base
  has_secure_password

  has_many :authorizations, dependent: :destroy
  has_one :image, as: :imageable, dependent: :destroy
  accepts_nested_attributes_for :image, reject_if: :all_blank, allow_destroy: true

  validates :email, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
  validates :username, uniqueness: true

  enum role: [:user, :moderator]

  scope :blocked, -> { where(banned: true) }
  scope :no_blocked, -> { where(banned: false) }

  NO_EMAIL   = { errors: { message: I18n.t('auth.errors.no_email'), status: 403 } }.freeze
  NO_CONFIRM = { errors: { message: I18n.t('auth.errors.no_confirm'), status: 423 } }.freeze
  CONFLICT   = { errors: { message: I18n.t('auth.errors.conflict'), status: 409 } }.freeze
  LOCKED     = { errors: { message: I18n.t('auth.errors.locked'), status: 423 } }.freeze

  def self.for_oauth(oauth)
    oauth.get_data
    data = oauth.data

    user = find_by(oauth.provider => data[:id]) || find_or_create_by(email: data[:email]) do |u|
      u.password =  SecureRandom.hex
    end

    user.update(
      display_name: oauth.get_names.join(' '),
      email: data[:email],
      oauth.provider => data[:id]
    )

    user
  end

  def self.from_auth(params, current_user, email=nil, device = {})
    params = params.smash.with_indifferent_access
    authorization = Authorization.find_or_initialize_by(provider: params[:provider], uid: params[:uid])
    return NO_EMAIL unless params[:email] || email || authorization.confirmed_at
    if authorization.persisted?
      if current_user
        if current_user.id == authorization.user.id
          user = current_user
        else
          return CONFLICT
        end
      else
        if authorization.confirmed
          user = authorization.user
        else
          return NO_CONFIRM
        end
      end
    else
      if current_user
        user = current_user
      elsif email
        user = User.find_or_initialize_by(email: email)
        authorization.confirmed = false
      elsif params[:email].present?
        user = User.find_or_initialize_by(email: params[:email])
      else
        user = User.new
      end
    end
    return LOCKED if user.banned == true
    authorization.secret = params[:secret]
    authorization.token  = params[:token]

    user.set_names(params)
    user.set_device(device) unless device.values.compact.empty?
    user.image ||= Image.create!(remote_image_url: params[:image_url]) if params[:image_url] && authorization.confirmed == true
    user.password = Devise.friendly_token[0, 10] if user.password_digest.blank?
    user.save

    authorization.user_id ||= user.id
    authorization.save
    unless authorization.confirmed
      UserMailer.registration_confirmation(authorization, user).deliver
      return NO_CONFIRM
    end
    user
  end

  def set_device device
    device_id = device[:device_id]
    device_type = device[:device_type]
  end

  def set_names params
    fallback_name        = params[:name].split(' ') if params[:name]
    fallback_first_name  = fallback_name.try(:first)
    fallback_last_name   = fallback_name.try(:last)
    self.username        ||= params[:email]
    self.first_name      ||= (params[:first_name] || fallback_first_name)
    self.last_name       ||= (params[:last_name] || fallback_last_name)
  end
end
