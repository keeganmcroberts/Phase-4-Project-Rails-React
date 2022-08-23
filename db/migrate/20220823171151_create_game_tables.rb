class CreateGameTables < ActiveRecord::Migration[6.1]
  def change
    create_table :game_tables do |t|
      t.string :name
      t.string :player_1
      t.string :player_2
      t.string :player_3
      t.string :player_4
      t.timestamps
    end
  end
end
