class Api::BeersController < ApplicationController
  def index
    @beers = Beer.all
    @breweries = Brewery.all
  end
end
