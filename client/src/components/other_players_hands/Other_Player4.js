import Player4Card from '../Player4_Card'

function Other_Player4({displayCard, 
    player4HandState, 
    completeDeck, 
    dontSeeTheCards, 
    player4Turn, 
    player4Skip, 
    player4HandleReverse, 
    player4Add2,
    draw4WildPlayer4,
    player4WildCard,
    playerTurn
    
}){
   
//    console.log("Player 4 hand in player 4 hand component:", player4HandState)
    return(
    <>
    
        <div className="player-right">
            <Player4Card 
              
                draw4WildPlayer4={draw4WildPlayer4}
                player4Add2={player4Add2} 
                player4Turn={player4Turn} 
                player4Skip={player4Skip} 
                player4HandleReverse={player4HandleReverse} 
                displayCard={displayCard} 
                player4HandState={player4HandState} 
                card={completeDeck} 
                dontseethecards={dontSeeTheCards}
                player4WildCard={player4WildCard} 
                playerTurn={playerTurn}
            />
        </div>
        <h2> Player 4 Hand </h2> 
    
    </>
    )
}

export default Other_Player4;