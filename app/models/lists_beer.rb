class ListsBeer < ApplicationRecord
  validates :list_id, :beer_id, presence: true

  belongs_to :list
  belongs_to :beer
end
