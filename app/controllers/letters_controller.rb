class LettersController < ApplicationController
  before_action :set_letter, only: [:show, :update, :destroy]

  # GET /letters
  def index
    @letters = Letter.all.includes(:words)
    render :index
    # render json: @letters.map { |letter| letter.as_json(only: [:id, :name], include: :words) }
  end

  # GET /letters/1
  def show
    render :show
  end

  # POST /letters
  def create
    @letter = Letter.new(letter_params)

    if @letter.save
      render json: @letter, status: :created, location: @letter
    else
      render json: @letter.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /letters/1
  def update
    if @letter.update(letter_params)
      render json: @letter
    else
      render json: @letter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /letters/1
  def destroy
    @letter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_letter
      @letter = Letter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def letter_params
      params.fetch(:letter, {})
    end
end
