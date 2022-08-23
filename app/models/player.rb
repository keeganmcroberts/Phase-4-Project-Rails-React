class Player < ApplicationRecord
    has_many :cards
    belongs_to :game_table

    validates :user_name, uniqueness: true
end
