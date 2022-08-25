class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :emblem
      t.string :value
      t.timestamps
    end
  end
end
