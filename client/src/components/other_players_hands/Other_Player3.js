import Card from '../Card'

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
            <Card player3HandState={player3HandState} card={completeDeck} dontSeeTheCards={dontSeeTheCards}/>
            <button onClick={player3Turn}> Next </button>
            <button onClick={player3Skip}> Skip </button> 
            <button onClick={handleReverse}> Reverse </button> 
    </>
    )
}

export default Other_Player3;