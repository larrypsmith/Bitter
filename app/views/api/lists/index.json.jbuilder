json.lists do 
  @lists.each do |list|
    json.set! list.id do 
      json.partial! 'api/lists/list', list: @list
    end
  end
end

json.users do
  @lists.each do |list|
    json.set! list.user_id do
      json.partial! 'api/users/user', user: list.user
    end
  end
end

json.beers do 
  @lists.each do |list|
    list.beers.each do |beer|
      json.set! beer.id do 
        json.partial! 'api/beers/beer' beer: beer
      end
    end
  end
endg