class Player < ApplicationRecord

    has_secure_password
    
    has_many :cards

    belongs_to :game_table
    belongs_to :leader_board

    validates :user_name, uniqueness: true
end
