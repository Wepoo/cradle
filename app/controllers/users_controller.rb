class UsersController < ApplicationController
  before_filter :set_current_user
  before_filter :authenticate_user!, :except => [:upload_avatar]
  before_action :set_user, only: [:ban]

  skip_before_filter :verify_authenticity_token, :only => [:update, :upload_avatar, :ban]

  def show
    @user = current_user
    @image = @user.image
    @favorite_spots = @user.favorite_spots.includes(:images)
  end

  def update
    current_user.update api_params
    if current_user.errors.empty?
      if params[:update_image]
        image = Image.where(imageable_id: current_user.id, imageable_type: 'User').last
        current_user.image = image
        current_user.save
      end
      head :no_content
    else
      render json: { errors: 'Exist' }, status: 403
    end
  end

  def upload_avatar
    if params[:file]
      image = Image.where(imageable_id: params[:user_id], imageable_type: 'User').last
      image.delete if image
      @image = Image.create(image: params[:file], imageable_id: params[:user_id], imageable_type: 'User')
    end
    render json: {}
  end

  def favorite_spots
    @user = User.find(params[:id])
    @spots = @user.favorite_spots
    render json: { favorite_spots: @spots }
  end

  def ban
    if @user && can?(:ban, @user)
      if params[:ban] && @user.update(banned: params[:ban])
        render nothing: true, status: :ok
      else
        render nothing: true, status: :forbidden
      end
    else
      render nothing: true, status: :unauthorized
    end
  end

  private

    def set_user
      @user = User.find_by(id: params[:id])
    end

    def api_params
      params.require(:user).permit(:email, :username)
    end
end
