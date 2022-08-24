function Other_Player4({dontSeeTheCards, player4Turn, player4Skip, player4Reverse}){
    return(
    <>
    <h2> Player 4</h2> 
            <button onClick={player4Turn}> Next </button>
            <button onClick={player4Skip}> Skip </button> 
            <button onClick={player4Reverse}> Reverse </button>
    
    </>
    )
}

export default Other_Player4;