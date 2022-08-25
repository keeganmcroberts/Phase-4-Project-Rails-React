import Card from './Card'

function PlayerHand({ completeDeck={completeDeck}, 
    player1Turn, 
    player1Skip, 
    handleReverse, 
    seethecards, 
    skipPlayer2, 
    settingPlayer2, 
    reversePlayer4, 
    myHandState
}){

    console.log("My hand state in my hand component:", myHandState)
 return(
    <>
        <h2> My Hand </h2>
            <Card onClick={myHandState} card={completeDeck} seethecards={seethecards} myHandState={myHandState}/>
                <button onClick={player1Turn}> Next </button>
                <button onClick={player1Skip}> Skip </button> 
                <button onClick={handleReverse}> Reverse </button>  
    </>
 )
}

export default PlayerHand;