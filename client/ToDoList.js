/*

✅1) set cards in Hand (playerHands) to respective card image with cardImageAssignment and startingHands functions 
✅12) create onCLick for the card to do (>>>>have the logic, need the associations with card images)
    - next player (for all number cards)
    - reverse order (for reverse cards)
    - skip player (for skip cards)
    - add 2 to other player deck (add_2)
    - draw deck pile
    - add 4 wild card 
✅13) create logic for cards played to match emblem or color of card before
✅14) create prompts when wild card is played to determine next color
 
✅5) create state for the starting color/emblem/value of the top of played deck card
6) assign players location in player array sequentially as they sign in
7) create a winner state and a game over state
8) use winner state to add player name to leaderboard 
✅9) figure out the plus 2 undefined error (.unshift adds card and undefined object to deck => [deletedCard, ...playedCards does not add played +2 to playedDeck])
10.) highlight which players turn it is 
11.) when 4 players are logged in, only display fronts of your own cards 

Super Stretch Goal 
 1) daisy chain add 2 to make cards exist in vacume to add more than two 
    if more than one add 2 is playedin order
2) have background image on table tell which direction play is happening (clockwise/!clockwise)
3) have players choose an avatar 
4.5) create functionality for Um buttom, to announce button  ************


To see the cards 
- to display card
    - 


*/






//not working:
    //✅player 2 add 2 (giving player 3 2 cards but setting turn to player 1)
    //✅ +2s cant be played on top of each other 
    //✅add 4 undefined object (know how to fix)
        //✅leads to new error of multiple players getting the 4 cards