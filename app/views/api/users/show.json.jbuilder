json.users do
  json.set! @user.id do
    json.partial! '/api/users/user', user: @user
  end
end

json.checkins do 
  @user.checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end
  end
end