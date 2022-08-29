import Player3_Card from "../Player3_Card"

function Other_Player3({player3HandState, 
    completeDeck, 
    dontSeeTheCards, 
    player3Skip, 
    player3Turn, 
    player3HandleReverse,
    displayCard,
    player3Add2,
    draw4WildPlayer3,
    player3WildCard
}){

    return( <>
     
        <div className="player-bottom">
            <Player3_Card 
                draw4WildPlayer3={draw4WildPlayer3}
                player3Add2={player3Add2} 
                player3Turn={player3Turn} 
                player3Skip={player3Skip} 
                player3HandleReverse={player3HandleReverse} 
                displayCard={displayCard} onClick={player3HandState} 
                card={completeDeck} 
                dontseethecards={dontSeeTheCards} 
                player3HandState={player3HandState}
                player3WildCard={player3WildCard}
            />
        </div>
        <h2 className="player-distinction"> Player 3 Hand </h2> 
    </>
    )
}

export default Other_Player3;