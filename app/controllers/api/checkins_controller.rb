class Api::CheckinsController < ApplicationController
  def index
    @checkins = Checkin.limit(10)
  end

  def show 
    @checkin = Checkin.find_by(id: params[:id])

    if @checkin
      render :show
    else
      render json: ['Invalid checkin ID'], status: 404
    end
  end
end
