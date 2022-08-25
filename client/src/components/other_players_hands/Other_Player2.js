import Card from '../Card'

function Other_Player2({completeDeck, 
    player2Turn, 
    player2Skip, 
    handleReverse, 
    dontSeeTheCards,
    player2HandState }){

        console.log("player 2 component hand state:", player2HandState)
    
    return( <>
        <h2> Player 2 Hand</h2>
                <Card card={completeDeck} dontSeeTheCards={dontSeeTheCards} player2HandState={player2HandState}/>
            <button onClick={player2Turn}> Next </button>
            <button onClick={player2Skip}> Skip </button> 
            <button onClick={handleReverse}> Reverse </button> 
    </>
    )
}
export default Other_Player2;