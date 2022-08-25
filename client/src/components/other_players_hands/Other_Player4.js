import Card from "../Card";

function Other_Player4({player4HandState, completeDeck, dontSeeTheCards, player4Turn, player4Skip, handleReverse}){
   
   console.log("Player 4 hand in player 4 hand component:", player4HandState)
    return(
    <>
    <h2> Player 4 Hand </h2> 
            <Card player4HandState={player4HandState} card={completeDeck} dontSeeTheCards={dontSeeTheCards}/>
            <button onClick={player4Turn}> Next </button>
            <button onClick={player4Skip}> Skip </button> 
            <button onClick={handleReverse}> Reverse </button>
    
    </>
    )
}

export default Other_Player4;