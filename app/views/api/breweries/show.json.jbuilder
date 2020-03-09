json.breweries do
  json.partial! 'api/breweries/brewery', brewery: @brewery
end

json.beers do
  @brewery.beers.each do |beer|
    json.set! beer.id do
      json.partial! 'api/beers/beer', beer: beer
    end
  end
end
