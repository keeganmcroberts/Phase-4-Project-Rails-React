class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :user_name
      t.string :password
      t.integer :rounds_won
      t.integer :rounds_lost
      t.belongs_to :card, null: false, foreign_key: true
      t.belongs_to :game_table, null: false, foreign_key: true
      t.timestamps
    end
  end
end
