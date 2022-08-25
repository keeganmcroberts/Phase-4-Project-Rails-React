

function PlayerHand({seethecards, skipPlayer2, settingPlayer2, reversePlayer4 }){
 return(
    <>
        <h2> Player 1</h2>
                <button onClick={settingPlayer2}> Next </button>
                <button onClick={skipPlayer2}> Skip </button> 
                <button onClick={reversePlayer4}> Reverse </button>  
    </>
 )
}

export default PlayerHand;