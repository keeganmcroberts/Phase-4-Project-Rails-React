import { useState } from 'react';
import Cards from './Card'

function PlayerHand({seethecards, skipPlayer2, settingPlayer2, reversePlayer4 }){


   return(
   <>
      <h2> My Plays</h2>
         <Cards seeCard={seethecards}/> 
            {/* <button onClick={settingPlayer2}> Next </button>
            <button onClick={skipPlayer2}> Skip </button> 
            <button onClick={reversePlayer4}> Reverse </button>   */}
   </>
)
}

export default PlayerHand;