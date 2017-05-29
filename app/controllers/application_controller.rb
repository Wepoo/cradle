class ApplicationController < ActionController::API
  private

  def authenticate_user!
    unauthorized! unless current_user
  end

  def unauthorized!
    head :unauthorized
  end

  attr_reader :current_user

  def set_current_user
    token = request.headers['Authorization'].to_s.split(' ').last
    return unless token

    payload = Token.new(token)

    @current_user = User.find(payload.user_id) if payload.valid?
  end
end
