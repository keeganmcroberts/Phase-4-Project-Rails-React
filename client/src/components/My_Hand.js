import Card from './Card'

function PlayerHand({ completeDeck={completeDeck}, 
    player1Turn, 
    player1Skip, 
    player1HandleReverse, 
    displayCard,
    myHandState,
    player1Add2, 
    draw4WildPlayer1,
    puttingDownCardsP1,
    player1WildCard
}){

    // console.log("My hand state in my hand component:", myHandState)
    
    
 return(
    <>
        <h2> My Hand </h2>
        
        {displayCard ? 
        
        <Player1_Card 
            onClick={myHandState} 
            card={completeDeck} 
            displayCard={displayCard} 
            myHandState={myHandState} 
            player1Turn={player1Turn}  
            player1Skip={player1Skip}
            player1HandleReverse={player1HandleReverse} 
            player1Add2={player1Add2}
            draw4WildPlayer1={draw4WildPlayer1}
            puttingDownCardsP1={puttingDownCardsP1}
            player1WildCard={player1WildCard} /> 
            
        :null}   

    </>
 )
}

export default PlayerHand;