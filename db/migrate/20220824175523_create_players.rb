class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :user_name
      t.string :password
      t.integer :rounds_won
      t.integer :rounds_lost
      t.boolean :private_account

      t.timestamps
    end
  end
end
