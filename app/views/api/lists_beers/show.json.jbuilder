json.listsBeers do 
  json.set! @lists_beer.id do 
    json.partial! 'api/lists_beers/lists_beer', lists_beer: @lists_beer
  end
end