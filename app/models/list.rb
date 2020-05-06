class List < ApplicationRecord
  validates :user_id, :name, presence: true
  validates :name, length: { maximum: 50 }
  validates :description, length: { maximum: 300}, allow_nil: true

  belongs_to :user

  has_many :lists_beers

  has_many :beers,
  through: :lists_beers,
  source: :beer
end
