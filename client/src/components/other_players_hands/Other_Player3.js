import Player3_Card from "../Player3_Card"

function Other_Player3({player3HandState, 
    completeDeck, 
    dontSeeTheCards, 
    player3Skip, 
    player3Turn, 
    player3HandleReverse,
    displayCard,
    player3Add2
}){
    // console.log("player 3 component hand state:", player3HandState)
    return( <>
        <h2> Player 3 Hand </h2> 
        {/* {player3HandState.map( eachCard =>{
            return ( */}
            <Player3_Card player3Add2={player3Add2} player3Turn={player3Turn} player3Skip={player3Skip} player3HandleReverse={player3HandleReverse} displayCard={displayCard} onClick={player3HandState} card={completeDeck} dontseethecards={dontSeeTheCards} player3HandState={player3HandState}/>
        {/* // )})} */}
            {/* <button onClick={player3Turn}> Next </button>
            <button onClick={player3Skip}> Skip </button> 
            <button onClick={handleReverse}> Reverse </button>  */}
    </>
    )
}

export default Other_Player3;