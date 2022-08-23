class Card < ApplicationRecord
  belongs_to :player
  # has_many :game_tables, through: :players
end
