class Checkin < ApplicationRecord
  validates :user_id, :beer_id, presence: true
  validates :rating, inclusion: { in: (0..5).to_a,
    message: "rating is not between 0 and 5" }, allow_nil: true

  belongs_to :user
  belongs_to :beer

  has_one :brewery,
  through: :beer,
  source: :brewery
end