class CreateGameTables < ActiveRecord::Migration[6.1]
  def change
    create_table :game_tables do |t|
      t.string :name
      t.belongs_to :player, null: false, foreign_key: true

      t.timestamps
    end
  end
end
