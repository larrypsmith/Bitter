class Beer < ApplicationRecord
  validates :brewery_id, :name, :beer_type, :abv, :ibu, :description, presence: true
  validates :brewery_id, uniqueness: { scope: :name }
  
  belongs_to :brewery

  has_one_attached :profile_picture
end
