class Beer < ApplicationRecord
  validates :brewery_id, :name, :beer_type, :abv, :ibu, :description, presence: true
  validates :brewery_id, uniqueness: { scope: :name }
  
  belongs_to :brewery

  has_many :checkins

  has_one_attached :profile_picture

  has_many :drinkers,
  through: :checkins,
  source: :user

  has_many :lists_beers

  has_many :lists,
  through: :lists_beers,
  source: :list
end
