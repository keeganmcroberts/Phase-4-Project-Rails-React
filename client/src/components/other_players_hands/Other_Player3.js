function Other_Player3({dontSeeTheCards, player3Skip, player3Turn, player3Reverse }){
    return( <>
        <h2> Player 3</h2> 
            <button onClick={player3Turn}> Next </button>
            <button onClick={player3Skip}> Skip </button> 
            <button onClick={player3Reverse}> Reverse </button> 
    </>
    )
}

export default Other_Player3;