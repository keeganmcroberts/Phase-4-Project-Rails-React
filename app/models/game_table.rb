class GameTable < ApplicationRecord
  has_many :players
  has_many :cards, through: :players
end
