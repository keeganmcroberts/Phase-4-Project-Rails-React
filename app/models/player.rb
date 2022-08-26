class Player < ApplicationRecord
    belongs_to :game_table
    belongs_to :leader_board
    # has_secure_password

    validates :user_name, presence:true, uniqueness: true
 
end
