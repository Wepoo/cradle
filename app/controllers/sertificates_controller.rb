class SertificatesController < ApplicationController

  # GET /sertificates/1
  def show
    pdf = Sertificate.find_by(:id).file
    respond_to do |format|
      format.json do
        render json: pdf.to_json
      end
    end
  end

  # POST /sertificates
  def create
  end
end
