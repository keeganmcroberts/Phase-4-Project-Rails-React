import Card from "../Card";


function Other_Player2({dontSeeTheCards, player2Skip, player2Turn, player2Reverse }){
    return( <>
        <h2> P2 Hand</h2> 
        <Card dontSeeCard={dontSeeTheCards}/>
            {/* <button onClick={player2Turn}> Next </button>
            <button onClick={player2Skip}> Skip </button> 
            <button onClick={player2Reverse}> Reverse </button>  */}
    </>
    )
}
export default Other_Player2;