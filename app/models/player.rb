class Player < ApplicationRecord
    belongs_to :game_table, required: false
    belongs_to :leader_board, required: false
   has_secure_password

    validates :user_name, presence:true, uniqueness: true
 
end
