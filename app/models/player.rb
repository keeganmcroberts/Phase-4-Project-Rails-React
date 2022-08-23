class Player < ApplicationRecord
    belongs_to :game_table
    belongs_to :leader_board

    validates :user_name, uniqueness: true
end
