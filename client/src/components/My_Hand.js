import Player1_Card from "./Player1_Card"

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
        {/* {completeDeck.map( eachHand =>{ */}
        {/* {myHandState.map( eachCard =>{
            return ( */}
        {displayCard? <Player1_Card onClick={myHandState} card={completeDeck} 
                                    displayCard={displayCard} myHandState={myHandState} 
                                    player1Turn={player1Turn}  player1Skip={player1Skip}
                                    player1HandleReverse={player1HandleReverse} player1Add2={player1Add2}
                                    draw4WildPlayer1={draw4WildPlayer1}/> :null}   
            {/* <Player1_Card  onClick={myHandState} card={completeDeck} displayCard={displayCard} myHandState={myHandState} />  */}
        {/* )})} */}
            {/* // <Card onClick={myHandState} card={completeDeck} seethecards={seethecards} myHandState={myHandState}/> */}
                {/* <button onClick={player1Turn}> Next </button>
                <button onClick={player1Skip}> Skip </button> 
                <button onClick={handleReverse}> Reverse </button>   */}
        
    
    </>
 )
}

export default PlayerHand;