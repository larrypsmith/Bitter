json.extract! user, :id, :username
json.profilePictureUrl url_for(user.profile_picture)
json.coverPhotoUrl url_for(user.cover_photo)