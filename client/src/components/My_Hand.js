import Card from './Card'

function PlayerHand({ completeDeck={completeDeck}, 
    player1Turn, 
    player1Skip, 
    player1HandleReverse, 
    displayCard,
    skipPlayer2, 
    settingPlayer2, 
    reversePlayer4, 
    myHandState,
    player1Add2, 
    draw4WildPlayer1
}){

    // console.log("My hand state in my hand component:", myHandState)
    
    
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