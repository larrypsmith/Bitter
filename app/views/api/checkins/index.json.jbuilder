json.checkins do 
  @checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end
  end
end

json.users do
  @checkins.each do |checkin|
    json.set! checkin.user.id do
      json.partial! 'api/users/user', user: checkin.user
    end
  end
end

json.beers do
  @checkins.each do |checkin|
    json.set! checkin.beer.id do
      json.partial! 'api/beers/beer', beer: checkin.beer
    end
  end
end

json.breweries do
  @checkins.each do |checkin|
    json.set! checkin.brewery.id do
      json.partial! 'api/breweries/brewery', brewery: checkin.brewery
    end
  end
end


