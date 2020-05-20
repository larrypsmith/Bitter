json.lists do
  json.set! @list.id do
    json.partial! 'api/lists/list', list: @list
  end
end

json.listsBeers do
  @list.lists_beers.each do |lists_beer|
    json.set! lists_beer.id do
      json.partial! 'api/lists_beers/lists_beer', lists_beer: lists_beer
    end
  end
end

json.beers do
  @list.beers.each do |beer|
    json.set! beer.id do
      json.partial! 'api/beers/beer', beer: beer
    end
  end
end

json.breweries do
  @list.beers.each do |beer|
    json.set! beer.brewery_id do
      json.partial! 'api/breweries/brewery', brewery: beer.brewery
    end
  end
end