class Card < ApplicationRecord
  has_many :players
  has_many :game_tables, through: :players
end
