class Player < ApplicationRecord
    belongs_to :card
    belongs_to :game_table
end
