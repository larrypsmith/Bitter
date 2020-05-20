class Api::ListsBeersController < ApplicationController
  def create 
    @lists_beer = ListsBeer.new(lists_beer_params)

    if @lists_beer.save
      render :show
    else
      render json: @lists_beer.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @lists_beer = ListsBeer.find_by(id: params[:id])

    if @lists_beer.destroy
      render :show
    else
      render json: @lists_beer.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  
  def lists_beer_params
    params.require(:lists_beer).permit(:list_id, :beer_id)
  end
end