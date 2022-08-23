class CreateLeaderBoards < ActiveRecord::Migration[6.1]
  def change
    create_table :leader_boards do |t|
      t.integer "player_id"
      t.timestamps
    end
  end
end
