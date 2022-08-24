class CreateGameTables < ActiveRecord::Migration[6.1]
  def change
    create_table :game_tables do |t|
      t.string :name

      t.timestamps
    end
  end
end
