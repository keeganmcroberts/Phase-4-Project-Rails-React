import Card from '../Card'

function Other_Player2({completeDeck, 
    player2Turn, 
    player2Skip, 
    handleReverse, 
    dontSeeTheCards,
    player2HandState,
    displayCard,
    draw4WildPlayer2,
    player2WildCard
     }){


      
    return( <>

        <h2> Player 2 Hand</h2>
        
            <Player2Card 
                displayCard={displayCard} 
                onClick={player2HandState} 
                card={completeDeck} 
                dontseethecards={dontSeeTheCards} 
                player2HandState={player2HandState}
                player2Turn={player2Turn} 
                player2Skip={player2Skip}
                player2HandleReverse={player2HandleReverse} 
                player2Add2={player2Add2}
                draw4WildPlayer2={draw4WildPlayer2}
                player2WildCard={player2WildCard}
            />
    </>
    )
}
export default Other_Player2;