class GameTable < ApplicationRecord
  has_many :players
  # has_many :cards, through: :players
  validates :name, uniqueness: true
end
