class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :emblem
      t.integer :number
      t.belongs_to :player, null: false, foreign_key: true
      t.timestamps
    end
  end
end
