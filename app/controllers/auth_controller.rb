class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:authenticate, :login, :signup]

  def render_data(data, status)
    render json: data, status: status, callback: params[:callback]
  end

  def render_error(message, status = :unprocessable_entity)
    render_data({ error: message }, status)
  end

  def render_success(data, status = :ok)
    if data.is_a? String
      render_data({ message: data }, status)
    else
      render_data(data, status)
    end
  end

  def signup
    @user = User.create auth_params
    render json: { token: Token.encode(@user.id) }
  end

  def login
    @user = User.find_by email: params[:email] if params[:email].present?

    if @user && @user.authenticate(params[:password])
      render json: { token: Token.encode(@user.id) }
    else
      render json: { message: 'Invalid credentials' }, status: :unauthorized
    end
  end

  def authenticate
    @oauth = "Oauth::#{params['provider'].titleize}".constantize.new(params)
    if @oauth.authorized?
      @user = User.from_auth(@oauth.formatted_user_data, 
                             current_user, 
                             params[:auth]['0'][:email], 
                             { device_type: params[:device_type], device_id: params[:device_id] })
      unless @user[:errors]
        unless @user.last_sign_in_at
          render_success(token: Token.encode(@user.id), id: @user.id, signup: true )
        else
          render_success(token: Token.encode(@user.id), id: @user.id)
        end
        @user.last_sign_in_at = Time.now
        @user.save
      else
        render json: { message: @user[:errors][:message] }, status: @user[:errors][:status]
      end
    else
      render_error("There was an error with #{params['provider']}. please try again.")
    end
  end

  def confirm_email
    authorization = Authorization.find_by(confirm_token: params[:token])
    if authorization
      authorization.email_activate
      redirect_to root_url
    else
      redirect_to root_url
    end
  end

  private

  def auth_params
    params.require(:auth).permit(:email, :password, :username,
                                 images_attributes: [:id, :image])
  end
end
