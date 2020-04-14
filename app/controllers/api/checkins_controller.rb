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

  def create
    @checkin = current_user.checkins.new(checkin_params)

    if @checkin.save
      render :show
    else
      render json: @checkin.errors.full_messages, status: :unprocessable_entity
    end
  end

  def checkin_params
    params.require(:checkin).permit(:beer_id, :rating, :body)
  end
end
