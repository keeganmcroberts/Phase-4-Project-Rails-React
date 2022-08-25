import Player4Card from '../Player4_Card'

function Other_Player4({displayCard, player4HandState, completeDeck, dontSeeTheCards, player4Turn, player4Skip, player4HandleReverse, player4Add2}){
   
//    console.log("Player 4 hand in player 4 hand component:", player4HandState)
    return(
    <>
    <h2> Player 4 Hand </h2> 
        {/* {player4HandState.map( eachCard =>{
            return ( */}
            {/* <Player4Card eachCard={eachCard} onClick={player4HandState} card={completeDeck} dontseethecards={dontSeeTheCards} player2HandState={player4HandState}/> */}
            <Player4Card player4Add2={player4Add2} player4Turn={player4Turn} player4Skip={player4Skip} player4HandleReverse={player4HandleReverse} displayCard={displayCard} player4HandState={player4HandState} card={completeDeck} dontseethecards={dontSeeTheCards} />

        {/* )})} */}
            {/* <Card player4HandState={player4HandState} card={completeDeck} dontSeeTheCards={dontSeeTheCards}/> */}
            {/* <button onClick={player4Turn}> Next </button>
            <button onClick={player4Skip}> Skip </button> 
            <button onClick={handleReverse}> Reverse </button> */}
    
    </>
    )
}

export default Other_Player4;