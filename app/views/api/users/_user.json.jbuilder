json.extract! user, :id, :username

if user.profile_picture.attached? 
  json.profilePictureUrl url_for(user.profile_picture)
end

if user.cover_photo.attached? 
  json.coverPhotoUrl url_for(user.cover_photo)
end