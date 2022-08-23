# This file should contain all the record creation needed to seed the database with its default numbers.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Card.destroy_all
Player.destroy_all
Card.create!([{ :value => "0", :emblem => "druid" },
    { :value => "1", :emblem => "druid" },
    { :value => "2", :emblem => "druid" },
    { :value => "3", :emblem => "druid" },
    { :value => "4", :emblem => "druid" },
    { :value => "5", :emblem => "druid" }, 
    { :value => "6", :emblem => "druid" },
    { :value => "7", :emblem => "druid" },
    { :value => "8", :emblem => "druid" }, 
    { :value => "9", :emblem => "druid" },
    { :value => "10", :emblem => "druid" },
    { :value => "11", :emblem => "druid" }, 
    { :value => "12", :emblem => "druid" },

    { :value => "0", :emblem => "thief" },
    { :value => "1", :emblem => "thief" },
    { :value => "2", :emblem => "thief" },
    { :value => "3", :emblem => "thief" },
    { :value => "4", :emblem => "thief" },
    { :value => "5", :emblem => "thief" }, 
    { :value => "6", :emblem => "thief" },
    { :value => "7", :emblem => "thief" },
    { :value => "8", :emblem => "thief" }, 
    { :value => "9", :emblem => "thief" },
    { :value => "10", :emblem => "thief" },
    { :value => "11", :emblem => "thief" }, 
    { :value => "12", :emblem => "thief" },

    { :value => "0", :emblem => "bard" },
    { :value => "1", :emblem => "bard" },
    { :value => "2", :emblem => "bard" },
    { :value => "3", :emblem => "bard" },
    { :value => "4", :emblem => "bard" },
    { :value => "5", :emblem => "bard" }, 
    { :value => "6", :emblem => "bard" },
    { :value => "7", :emblem => "bard" },
    { :value => "8", :emblem => "bard" }, 
    { :value => "9", :emblem => "bard" },
    { :value => "10", :emblem => "bard" },
    { :value => "11", :emblem => "bard" }, 
    { :value => "12", :emblem => "bard" },

    { :value => "0", :emblem => "illusionist" },
    { :value => "1", :emblem => "illusionist" },
    { :value => "2", :emblem => "illusionist" },
    { :value => "3", :emblem => "illusionist" },
    { :value => "4", :emblem => "illusionist" },
    { :value => "5", :emblem => "illusionist" }, 
    { :value => "6", :emblem => "illusionist" },
    { :value => "7", :emblem => "illusionist" },
    { :value => "8", :emblem => "illusionist" }, 
    { :value => "9", :emblem => "illusionist" },
    { :value => "10", :emblem => "illusionist" },
    { :value => "11", :emblem => "illusionist" }, 
    { :value => "12", :emblem => "illusionist" },

    { :value => "1", :emblem => "druid" },
    { :value => "2", :emblem => "druid" },
    { :value => "3", :emblem => "druid" },
    { :value => "4", :emblem => "druid" },
    { :value => "5", :emblem => "druid" }, 
    { :value => "6", :emblem => "druid" },
    { :value => "7", :emblem => "druid" },
    { :value => "8", :emblem => "druid" }, 
    { :value => "9", :emblem => "druid" },
    { :value => "10", :emblem => "druid" },
    { :value => "11", :emblem => "druid" }, 
    { :value => "12", :emblem => "druid" },

    { :value => "1", :emblem => "thief" },
    { :value => "2", :emblem => "thief" },
    { :value => "3", :emblem => "thief" },
    { :value => "4", :emblem => "thief" },
    { :value => "5", :emblem => "thief" }, 
    { :value => "6", :emblem => "thief" },
    { :value => "7", :emblem => "thief" },
    { :value => "8", :emblem => "thief" }, 
    { :value => "9", :emblem => "thief" },
    { :value => "10", :emblem => "thief" },
    { :value => "11", :emblem => "thief" }, 
    { :value => "12", :emblem => "thief" },

    { :value => "1", :emblem => "bard" },
    { :value => "2", :emblem => "bard" },
    { :value => "3", :emblem => "bard" },
    { :value => "4", :emblem => "bard" },
    { :value => "5", :emblem => "bard" }, 
    { :value => "6", :emblem => "bard" },
    { :value => "7", :emblem => "bard" },
    { :value => "8", :emblem => "bard" }, 
    { :value => "9", :emblem => "bard" },
    { :value => "10", :emblem => "bard" },
    { :value => "11", :emblem => "bard" }, 
    { :value => "12", :emblem => "bard" },
    
    { :value => "1", :emblem => "illusionist" },
    { :value => "2", :emblem => "illusionist" },
    { :value => "3", :emblem => "illusionist" },
    { :value => "4", :emblem => "illusionist" },
    { :value => "5", :emblem => "illusionist" }, 
    { :value => "6", :emblem => "illusionist" },
    { :value => "7", :emblem => "illusionist" },
    { :value => "8", :emblem => "illusionist" }, 
    { :value => "9", :emblem => "illusionist" },
    { :value => "10", :emblem => "illusionist" },
    { :value => "11", :emblem => "illusionist" }, 
    {  :value => "12", :emblem => "illusionist" },


    {  :value => "image_url", :emblem => "thief_skip" },
    {  :value => "image_url", :emblem => "thief_skip" },
    {  :value => "image_url", :emblem => "thief_reverse" },
    {  :value => "image_url", :emblem => "thief_reverse" },
    {  :value => "image_url", :emblem => "thief_add_2" },
    {  :value => "image_url", :emblem => "thief_add_2" },
    {  :value => "image_url", :emblem => "wild" },
    {  :value => "image_url", :emblem => "wild" },
    {  :value => "image_url", :emblem => "draw 4" },
    {  :value => "image_url", :emblem => "draw 4" },
    {  :value => "image_url", :emblem => "draw 4" },
    {  :value => "image_url", :emblem => "draw 4" },
    {  :value => "image_url", :emblem => "wild" },
    {  :value => "image_url", :emblem => "wild" },
    {  :value => "image_url", :emblem => "reverse" },
    {  :value => "image_url", :emblem => "reverse" },
    {  :value => "image_url", :emblem => "druid_skip" },
    {  :value => "image_url", :emblem => "druid_skip" },
    {  :value => "image_url", :emblem => "druid_add_2" },
    {  :value => "image_url", :emblem => "druid_add_2" },
    {  :value => "image_url", :emblem => "druid_reverse" },
    {  :value => "image_url", :emblem => "druid_reverse" },
    {  :value => "image_url", :emblem => "bard_skip" },
    {  :value => "image_url", :emblem => "bard_skip" },
    {  :value => "image_url", :emblem => "bard_add_2" },
    {  :value => "image_url", :emblem => "bard_add_2" },
    {  :value => "image_url", :emblem => "bard_reverse" },
    {  :value => "image_url", :emblem => "bard_reverse" },
    {  :value => "image_url", :emblem => "illusionist_skip" },
    {  :value => "image_url", :emblem => "illusionist_skip" },
    {  :value => "image_url", :emblem => "illusionist_add_2" },
    {  :value => "image_url", :emblem => "illusionist_add_2" },
    {  :value => "image_url", :emblem => "illusionist_reverse" },
    {  :value => "image_url", :emblem => "illusionist_reverse" },
]) 

    puts "cards FUCKING seeded!"


15.times do 
    Player.create(
        user_name: Faker::Name.first_name,
        password: Faker::Ancient.god,
        rounds_won: Faker::Number.number(digits: 1..2),
        rounds_lost: Faker::Number.number(digits: 1..2),
        card_id: Card.all.sample.id,
        game_table_id: GameTable.all.sample.id
    )
end

puts "players seeded!"


5.times do
    LeaderBoard.create(
        player_id: Player.all.sample.id
    )
puts "leaderboard seeded!"

3.times do
GameTable.create(
    name: Faker::TvShows::NewGirl.character,
    player_1: Player.all.sample.id,
    player_2: Player.all.sample.id,
    player_3: Player.all.sample.id,
    player_4: Player.all.sample.id
)
end
puts "pooped out players"
puts "done!"