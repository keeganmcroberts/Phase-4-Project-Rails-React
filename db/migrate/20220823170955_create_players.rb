class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :user_name
      t.string :password_digest
      t.integer :rounds_won
      t.integer :rounds_lost
      t.boolean :private_account
      t.belongs_to :game_table, null: true, foreign_key: true
      t.belongs_to :leader_board, null: false, foreign_key: true
      t.timestamps
    end
  end
end
