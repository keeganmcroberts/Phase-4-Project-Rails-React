import Player3_Card from '../Player3_card'

function Other_Player3({player3HandState, 
    completeDeck, 
    dontSeeTheCards, 
    player3Skip, 
    player3Turn, 
    handleReverse
}){
    console.log("player 3 component hand state:", player3HandState)
    return( <>
        <h2> Player 3 Hand </h2> 
        {player3HandState.map( eachCard =>{
            return (
            <Player3_Card eachCard={eachCard} onClick={player3HandState} card={completeDeck} dontseethecards={dontSeeTheCards} player3HandState={player3HandState}/>
        )})}
            <button onClick={player3Turn}> Next </button>
            <button onClick={player3Skip}> Skip </button> 
            <button onClick={handleReverse}> Reverse </button> 
    </>
    )
}

export default Other_Player3;