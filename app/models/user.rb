require 'open-uri'

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :checkins
  
  has_one_attached :profile_picture
  has_one_attached :cover_photo

  has_many :sampled_beers,
  through: :checkins,
  source: :beer

  has_many :sampled_breweries,
  through: :sampled_beers,
  source: :brewery

  has_many :lists

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def attach_profile_picture(photo_url) 
    img = open(photo_url)
    self.profile_picture.attach(io: img, filename: 'profile-picture')
  end

  def attach_cover_photo(photo_url)
    img = open(photo_url)
    self.cover_photo.attach(io: img, filename: 'cover-photo')
  end

  def attach_default_pictures
    self.attach_profile_picture("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/user-avatar.jpg")
    self.attach_cover_photo("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
