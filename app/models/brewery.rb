class Brewery < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :city, :country, :description, presence: true
end
