json.beers do
  @beers.each do |beer|
    json.set! beer.id do 
      json.partial! 'api/beers/beer', beer: beer
    end
  end
end

json.breweries do
  @breweries.each do |brewery|
    json.set! brewery.id do 
      json.partial! 'api/breweries/brewery', brewery: brewery
    end 
  end
end