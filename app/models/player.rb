class Player < ApplicationRecord
    HEAD
    belongs_to :game_table
    belongs_to :leader_board
    has_secure_password

    validates :user_name, uniqueness: true 
end
