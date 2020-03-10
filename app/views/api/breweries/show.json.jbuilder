json.breweries do
  json.set! @brewery.id do
    json.partial! 'api/breweries/brewery', brewery: @brewery
  end
end

json.beers do
  @brewery.beers.each do |beer|
    json.set! beer.id do
      json.partial! 'api/beers/beer', beer: beer
    end
  end
end

