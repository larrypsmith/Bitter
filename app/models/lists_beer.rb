class ListsBeer < ApplicationRecord
  validates :list_id, :beer_id, presence: true
end
