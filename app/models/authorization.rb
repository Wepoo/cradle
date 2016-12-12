class Authorization < ActiveRecord::Base
  before_create :confirmation_token

  belongs_to :user
  validates :user_id, :uid, :provider, presence: true
  validates :uid, uniqueness: { scope: :provider }

  scope :facebook, -> { find_by(provider: 'facebook') }
  # after_create :fetch_details

  def fetch_details
    send("fetch_details_from_#{provider.downcase}")
  end

  def fetch_details_from_facebook
    graph = Koala::Facebook::API.new(token)
    profile = graph.get_object('me')
    user = self.user
    user.update_attributes(first_name: profile['first_name'], last_name: profile['last_name'],
                           address: profile['location']['name'])

    user.save
  end

  def email_activate
    self.confirmed = true
    self.confirmed_at = Time.now
    self.confirm_token = nil
    save!(validate: false)
  end

  def fetch_details_from_google_oauth2
  end

  def fetch_details_from_vk
  end

  private

  def confirmation_token
    if confirm_token.blank?
      self.confirm_token = SecureRandom.urlsafe_base64.to_s
    end
  end
end
