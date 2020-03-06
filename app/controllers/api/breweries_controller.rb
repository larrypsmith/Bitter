class Api::BreweriesController < ApplicationController
  def index
    @breweries = Brewery.all
  end

  def show
    @brewery = Brewery.find_by(id: params[:id])

    if @brewery
      render :show
    else
      render json: ["Brewery id does not exit"], status: 404
    end
  end
end