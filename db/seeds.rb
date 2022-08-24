# This file should contain all the record creation needed to seed the database with its default numbers.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Player.destroy_all
LeaderBoard.destroy_all
GameTable.destroy_all
Card.destroy_all

puts "Initiating Seeds.."
Card.create!([
    { :value => "0", :emblem => "druid_0" },
    { :value => "1", :emblem => "druid_1" },
    { :value => "2", :emblem => "druid_2" },
    { :value => "3", :emblem => "druid_3" },
    { :value => "4", :emblem => "druid_4" },
    { :value => "5", :emblem => "druid_5" }, 
    { :value => "6", :emblem => "druid_6" },
    { :value => "7", :emblem => "druid_7" },
    { :value => "8", :emblem => "druid_8" }, 
    { :value => "9", :emblem => "druid_9" },
    { :value => "10", :emblem => "druid_10" },
    { :value => "11", :emblem => "druid_11" }, 
    { :value => "12", :emblem => "druid_12" },

    { :value => "0", :emblem => "thief_0" },
    { :value => "1", :emblem => "thief_1" },
    { :value => "2", :emblem => "thief_2" },
    { :value => "3", :emblem => "thief_3" },
    { :value => "4", :emblem => "thief_4" },
    { :value => "5", :emblem => "thief_5" }, 
    { :value => "6", :emblem => "thief_6" },
    { :value => "7", :emblem => "thief_7" },
    { :value => "8", :emblem => "thief_8" }, 
    { :value => "9", :emblem => "thief_9" },
    { :value => "10", :emblem => "thief_10" },
    { :value => "11", :emblem => "thief_11" }, 
    { :value => "12", :emblem => "thief_12" },

    { :value => "0", :emblem => "bard_0" },
    { :value => "1", :emblem => "bard_1" },
    { :value => "2", :emblem => "bard_2" },
    { :value => "3", :emblem => "bard_3" },
    { :value => "4", :emblem => "bard_4" },
    { :value => "5", :emblem => "bard_5" }, 
    { :value => "6", :emblem => "bard_6" },
    { :value => "7", :emblem => "bard_7" },
    { :value => "8", :emblem => "bard_8" }, 
    { :value => "9", :emblem => "bard_9" },
    { :value => "10", :emblem => "bard_10" },
    { :value => "11", :emblem => "bard_11" }, 
    { :value => "12", :emblem => "bard_12" },

    { :value => "0", :emblem => "illusionist_0" },
    { :value => "1", :emblem => "illusionist_1" },
    { :value => "2", :emblem => "illusionist_2" },
    { :value => "3", :emblem => "illusionist_3" },
    { :value => "4", :emblem => "illusionist_4" },
    { :value => "5", :emblem => "illusionist_5" }, 
    { :value => "6", :emblem => "illusionist_6" },
    { :value => "7", :emblem => "illusionist_7" },
    { :value => "8", :emblem => "illusionist_8" }, 
    { :value => "9", :emblem => "illusionist_9" },
    { :value => "10", :emblem => "illusionist_10" },
    { :value => "11", :emblem => "illusionist_11" }, 
    { :value => "12", :emblem => "illusionist_12" },

    {  :value => "skip", :emblem => "thief_skip" },
    {  :value => "skip", :emblem => "thief_skip" },
    {  :value => "reverse", :emblem => "thief_reverse" },
    {  :value => "reverse", :emblem => "thief_reverse" },
    {  :value => "add_2", :emblem => "thief_add_2" },
    {  :value => "add_2", :emblem => "thief_add_2" },
    {  :value => "wild", :emblem => "wild" },
    {  :value => "wild", :emblem => "wild" },
    {  :value => "draw_4", :emblem => "draw_4" },
    {  :value => "draw_4", :emblem => "draw_4" },
    {  :value => "draw_4", :emblem => "draw_4" },
    {  :value => "draw_4", :emblem => "draw_4" },
    {  :value => "wild", :emblem => "wild" },
    {  :value => "wild", :emblem => "wild" },
    {  :value => "skip", :emblem => "druid_skip" },
    {  :value => "skip", :emblem => "druid_skip" },
    {  :value => "add_2", :emblem => "druid_add_2" },
    {  :value => "add_2", :emblem => "druid_add_2" },
    {  :value => "reverse", :emblem => "druid_reverse" },
    {  :value => "reverse", :emblem => "druid_reverse" },
    {  :value => "skip", :emblem => "bard_skip" },
    {  :value => "skip", :emblem => "bard_skip" },
    {  :value => "add_2", :emblem => "bard_add_2" },
    {  :value => "add_2", :emblem => "bard_add_2" },
    {  :value => "reverse", :emblem => "bard_reverse" },
    {  :value => "reverse", :emblem => "bard_reverse" },
    {  :value => "skip", :emblem => "illusionist_skip" },
    {  :value => "skip", :emblem => "illusionist_skip" },
    {  :value => "add_2", :emblem => "illusionist_add_2" },
    {  :value => "add_2", :emblem => "illusionist_add_2" },
    {  :value => "reverse", :emblem => "illusionist_reverse" },
    {  :value => "reverse", :emblem => "illusionist_reverse" },
]) 
# Card.create(value: "image_url", emblem:"illusionist_reverse")
puts "cards seeded!"

puts "initialized leaderboard"
# 5.times do
leader_board1 = LeaderBoard.create()
puts "leaderboard seeded!"

puts "initialized game_table"
# 3.times do
game_table1 = GameTable.create(
    name: "The Awesome Table",
    # player_1: player1.id <-- doesn't work
)
# end
puts "game_table seeded!"

puts "initialized player"
# 15.times do 
player1 = Player.create(
    user_name: Faker::Name.first_name,
    # password: ManuallyWrite,
    password: "123",
    rounds_won: Faker::Number.number(digits: 1),
    rounds_lost: Faker::Number.number(digits: 1),
    # card_id: Card.all.sample.id,
    game_table_id: game_table1.id,
    leader_board_id: leader_board1.id

)
# end
puts "player seeded!"
puts "done!"
# end