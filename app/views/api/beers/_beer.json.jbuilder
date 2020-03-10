json.extract! beer, :id, :brewery_id, :name, :beer_type, :subtype, :abv, :ibu, :description
json.profilePictureUrl url_for(beer.profile_picture)
