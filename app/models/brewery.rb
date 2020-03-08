class Brewery < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :city, :country, :description, presence: true

  has_one_attached :profile_picture
end
