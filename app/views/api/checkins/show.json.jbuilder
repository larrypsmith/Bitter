json.checkins do 
  json.set! @checkin.id do 
    json.partial! 'api/checkins/checkin', checkin: @checkin
  end
end

json.users do
  json.set! @checkin.user.id do
    json.partial! 'api/users/user', user: @checkin.user
  end
end

json.beers do 
  json.set! @checkin.beer.id do
    json.partial! 'api/beers/beer', beer: @checkin.beer
  end
end

json.breweries do 
  json.set! @checkin.brewery.id do
    json.partial! 'api/breweries/brewery', brewery: @checkin.brewery
  end
end

