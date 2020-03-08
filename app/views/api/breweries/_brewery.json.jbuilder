json.extract! brewery, :id, :name, :city, :state, :country, :description
json.profilePictureUrl url_for(brewery.profile_picture)