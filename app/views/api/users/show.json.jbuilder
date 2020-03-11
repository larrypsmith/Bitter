json.users do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

json.checkins do 
  @user.checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end
  end
end

json.beers do
  @user.sampled_beers.each do |beer|
    json.set! beer.id do
      json.partial! 'api/beers/beer', beer: beer
    end
  end
end

json.breweries do 
  @user.sampled_breweries.each do |brewery|
    json.set! brewery.id do
      json.partial! 'api/breweries/brewery', brewery: brewery
    end
  end
end