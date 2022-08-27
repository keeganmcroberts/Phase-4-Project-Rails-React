import { useState } from 'react'

import backOfCard from '../cards/Back_of_Card.png'
import wild from '../cards/Wild.png'
import wild_draw4 from '../cards/Wild_draw4.png'

import thief_skip from '../cards/Green_skip.png'
import thief_reverse from '../cards/Green_Reverse.png'
import thief_add_2 from '../cards/Green_add2.png'
import thief_12 from '../cards/Green_12.png'
import thief_11 from '../cards/Green_11.png'
import thief_10 from '../cards/Green_10.png'
import thief_9 from '../cards/Green_9.png'
import thief_8 from '../cards/Green_8.png'
import thief_7 from '../cards/Green_7.png'
import thief_6 from '../cards/Green_6.png'
import thief_5 from '../cards/Green_5.png'
import thief_4 from '../cards/Greeen_4.png'
import thief_3 from '../cards/Green_3.png'
import thief_2 from '../cards/Green_2.png'
import thief_1 from '../cards/Green_1.png'
import thief_0 from '../cards/Green_0.png'

import bard_skip from '../cards/Blue_skip.png'
import bard_reverse from '../cards/Blue_Reverse.png'
import bard_add_2 from '../cards/Blue_add2.png'
import bard_12 from '../cards/Blue_12.png'
import bard_11 from '../cards/Blue_11.png'
import bard_10 from '../cards/Blue_10.png'
import bard_9 from '../cards/Blue_9.png'
import bard_8 from '../cards/Blue_8.png'
import bard_7 from '../cards/Blue_7.png'
import bard_6 from '../cards/Blue_6.png'
import bard_5 from '../cards/Blue_5.png'
import bard_4 from '../cards/Blue_4.png'
import bard_3 from '../cards/Blue_3.png'
import bard_2 from '../cards/Blue_2.png'
import bard_1 from '../cards/Blue_1.png'
import bard_0 from '../cards/Blue_0.png'

import druid_skip from '../cards/Pink_skip.png'
import druid_reverse from '../cards/Pink_Reverse.png'
import druid_add_2 from '../cards/Pink_add2.png'
import druid_12 from '../cards/Pink_12.png'
import druid_11 from '../cards/Pink_11.png'
import druid_10 from '../cards/Pink_10.png'
import druid_9 from '../cards/Pink_9.png'
import druid_8 from '../cards/Pink_8.png'
import druid_7 from '../cards/Pink_7.png'
import druid_6 from '../cards/Pink_6.png'
import druid_5 from '../cards/Pink_5.png'
import druid_4 from '../cards/Pink_4.png'
import druid_3 from '../cards/Pink_3.png'
import druid_2 from '../cards/Pink_2.png'
import druid_1 from '../cards/Pink_1.png'
import druid_0 from '../cards/Pink_0.png'

import illusionist_skip from '../cards/Red_skip.png'
import illusionist_reverse from '../cards/Red_Reverse.png'
import illusionist_add_2 from '../cards/Red_add2.png'
import illusionist_12 from '../cards/Red_12.png'
import illusionist_11 from '../cards/Red_11.png'
import illusionist_10 from '../cards/Red_10.png'
import illusionist_9 from '../cards/Red_9.png'
import illusionist_8 from '../cards/Red_8.png'
import illusionist_7 from '../cards/Red_7.png'
import illusionist_6 from '../cards/Red_6.png'
import illusionist_5 from '../cards/Red_5.png'
import illusionist_4 from '../cards/Red_4.png'
import illusionist_3 from '../cards/Red_3.png'
import illusionist_2 from '../cards/Red_2.png'
import illusionist_1 from '../cards/Red_1.png'
import illusionist_0 from '../cards/Red_0.png'


function Player4Card({player4WildCard, draw4WildPlayer4, player4Add2, player4Turn, player4Skip, player4HandleReverse, displayCard, player4HandState, seethecards, card}){
    

//  for start state 
// if ( myHandState.length > 7 && player2HandState > 7 && player3HandState > 7 && player4HandState > 7)
//     return setStartState(true)



    const [testcard, setTestCard] = useState({"emblem": "druid", "number": "5" })

    function cardImageAssignment(){
        // console.log("THE HAND:", eachCard)
        
        // if (myHandState > 1 && player2HandState > 1 && player3HandState > 1 && player4HandState > 1)
        // if (myHandState > 0)  
  
        return player4HandState.map( eachCard =>{
            
            if (eachCard.emblem === "thief_0")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_0} height={100} width={75} alt="thief 0"/>
        else if (eachCard.emblem === "thief_1")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_1} height={100} width={75} alt="thief 1"/>
        else if (eachCard.emblem === "thief_2")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_2} height={100} width={75} alt="thief 2"/>
        else if (eachCard.emblem === "thief_3" )
            return <img onClick={()=>player4Turn(eachCard)} src={thief_3} height={100} width={75} alt="thief 3"/>
        else if (eachCard.emblem === "thief_4")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_4} height={100} width={75} alt="thief 4"/>
        else if (eachCard.emblem === "thief_5")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_5} height={100} width={75} alt ="thief 5"/>
        else if (eachCard.emblem === "thief_6")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_6} height={100} width={75} alt="thief 6"/>
        else if (eachCard.emblem === "thief_7")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_7} height={100} width={75} alt="thief 7"/>
        else if (eachCard.emblem === "thief_8")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_8} height={100} width={75} alt="thief 8"/>
        else if (eachCard.emblem === "thief_9")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_9} height={100} width={75} alt="thief 9"/>
        else if (eachCard.emblem === "thief_10")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_10} height={100} width={75} alt="thief 10"/>
        else if (eachCard.emblem === "thief_11")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_11} height={100} width={75} alt="thief 11"/>
        else if (eachCard.emblem === "thief_12")
            return <img onClick={()=>player4Turn(eachCard)} src={thief_12} height={100} width={75} alt="thief 12"/>
        else if (eachCard.emblem === "thief_skip")
            return <img onClick={()=>player4Skip(eachCard)} src={thief_skip} height={100} width={75} alt="thief skip"/>
        else if (eachCard.emblem === "thief_reverse")
            return <img onClick={()=>player4HandleReverse(eachCard)} src={thief_reverse} height={100} width={75} alt="thief reverse"/>
        else if (eachCard.emblem === "thief_add_2")
            return <img onClick={()=> {player4Add2(eachCard)}} src={thief_add_2} height={100} width={75} alt="thief add 2"/>

        
        else if (eachCard.emblem === "druid_0")
            return <img onClick={()=>player4Turn(eachCard)} src={druid_0} height={100} width={75} alt="druid 0"/>
        else if (eachCard.emblem === "druid_1")
            return <img onClick={()=>player4Turn(eachCard)} src={druid_1} height={100} width={75} alt="druid 1"/>
        else if (eachCard.emblem === "druid_2")
            return <img onClick={()=>player4Turn(eachCard)} src={druid_2} height={100} width={75} alt="druid 2"/>
        else if (eachCard.emblem === "druid_3" )
            return <img onClick={()=>player4Turn(eachCard)} src={druid_3} height={100} width={75} alt="druid 3"/>
        else if (eachCard.emblem === "druid_4")
            return <img onClick={()=>player4Turn(eachCard)} src={druid_4} height={100} width={75} alt="druid 4"/>
        else if (eachCard.emblem === "druid_5")
            return <img onClick={()=>player4Turn(eachCard)} src={druid_5} height={100} width={75} alt="druid 5"/>
        else if (eachCard.emblem === "druid_6")
            return <img onClick={()=>player4Turn(eachCard)} src={druid_6} height={100} width={75} alt="druid 6"/>
        else if (eachCard.emblem === "druid_7")
            return <img onClick={()=>player4Turn(eachCard)} src={druid_7} height={100} width={75} alt="druid 7"/>
        else if (eachCard.emblem === "druid_8")
            return <img onClick={()=>player4Turn(eachCard)} src={druid_8} height={100} width={75} alt="druid 8"/>
        else if (eachCard.emblem === "druid_9")
            return <img onClick={()=>player4Turn(eachCard)} src={druid_9} height={100} width={75} alt="druid 9"/>
        else if (eachCard.emblem === "druid_10" )
            return <img onClick={()=>player4Turn(eachCard)} src={druid_10} height={100} width={75} alt="druid 10"/>
        else if (eachCard.emblem === "druid_11" )
            return <img onClick={()=>player4Turn(eachCard)} src={druid_11} height={100} width={75} alt="druid 11"/>
        else if (eachCard.emblem === "druid_12" )
            return <img onClick={()=>player4Turn(eachCard)} src={druid_12} height={100} width={75} alt="druid 12"/>
        else if (eachCard.emblem === "druid_skip")
            return <img onClick={()=>player4Skip(eachCard)} src={druid_skip} height={100} width={75} alt="druid skip"/>
        else if (eachCard.emblem === "druid_reverse")
            return <img onClick={()=>player4HandleReverse(eachCard)} src={druid_reverse} height={100} width={75} alt="druid reverse"/>
        else if (eachCard.emblem === "druid_add_2")
            return <img onClick={()=> {player4Add2(eachCard)}} src={druid_add_2} height={100} width={75} alt="druid add 2" />

        else if (eachCard.emblem === "illusionist_0")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_0} height={100} width={75} alt=" illusionist 0"/>
        else if (eachCard.emblem === "illusionist_1")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_1} height={100} width={75} alt=" illusionist 1"/>
        else if (eachCard.emblem === "illusionist_2")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_2} height={100} width={75} alt=" illusionist 2"/>
        else if (eachCard.emblem === "illusionist_3")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_3} height={100} width={75} alt=" illusionist 3"/>
        else if (eachCard.emblem === "illusionist_4")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_4} height={100} width={75} alt=" illusionist 4" />
        else if (eachCard.emblem === "illusionist_5")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_5} height={100} width={75} alt=" illusionist 5"/>
        else if (eachCard.emblem === "illusionist_6")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_6} height={100} width={75} alt=" illusionist 6"/>
        else if (eachCard.emblem === "illusionist_7")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_7} height={100} width={75} alt=" illusionist 7"/>
        else if (eachCard.emblem === "illusionist_8")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_8} height={100} width={75} alt=" illusionist 8"/>
        else if (eachCard.emblem === "illusionist_9")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_9} height={100} width={75} alt=" illusionist 9"/>
        else if (eachCard.emblem === "illusionist_10")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_10} height={100} width={75} alt=" illusionist 10"/>
        else if (eachCard.emblem === "illusionist_11")
            return <img onClick={()=>player4Turn(eachCard)} src={illusionist_11} height={100} width={75} alt=" illusionist 11"/>
        else if (eachCard.emblem === "illusionist_12")      
              return <img onClick={()=>player4Turn(eachCard)} src={illusionist_12} height={100} width={75} alt=" illusionist 12"/>
        else if (eachCard.emblem === "illusionist_skip")
            return <img onClick={()=>player4Skip(eachCard)} src={illusionist_skip} height={100} width={75}  alt=" illusionist skip"/>
        else if (eachCard.emblem === "illusionist_reverse")
            return <img onClick={()=>player4HandleReverse(eachCard)} src={illusionist_reverse} height={100} width={75} alt=" illusionist reverse"/>
        else if (eachCard.emblem === "illusionist_add_2")
            return <img onClick={()=> {player4Add2(eachCard)}} src={illusionist_add_2} height={100} width={75} alt=" illusionist add 2"/>

        else if (eachCard.emblem === "bard_0")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_0} height={100} width={75} alt=" bard 0"/>
        else if (eachCard.emblem === "bard_1")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_1} height={100} width={75} alt=" bard 1"/>
        else if (eachCard.emblem === "bard_2")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_2} height={100} width={75} alt=" bard 2"/>
        else if (eachCard.emblem === "bard_3")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_3} height={100} width={75} alt=" bard 3"/>
        else if (eachCard.emblem === "bard_4")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_4} height={100} width={75} alt=" bard 4"/>
        else if (eachCard.emblem === "bard_5")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_5} height={100} width={75} alt=" bard 5"/>
        else if (eachCard.emblem === "bard_6")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_6} height={100} width={75}  alt=" bard 6"/>
        else if (eachCard.emblem === "bard_7")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_7} height={100} width={75} alt=" bard 7"/>
        else if (eachCard.emblem === "bard_8")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_8} height={100} width={75} alt=" bard 8"/>
        else if (eachCard.emblem === "bard_9")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_9} height={100} width={75} alt=" bard 9"/>
        else if (eachCard.emblem === "bard_10")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_10} height={100} width={75} alt=" bard 10"/>
        else if (eachCard.emblem === "bard_11")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_11} height={100} width={75} alt=" bard 11"/>
        else if (eachCard.emblem === "bard_12")
            return <img onClick={()=>player4Turn(eachCard)} src={bard_12} height={100} width={75} alt=" bard 12" />
        else if (eachCard.emblem === "bard_skip")
            return <img onClick={()=>player4Skip(eachCard)} src={bard_skip} height={100} width={75} alt=" bard skip"/>
        else if (eachCard.emblem === "bard_reverse")
            return <img onClick={()=>player4HandleReverse(eachCard)} src={bard_reverse} height={100} width={75} alt=" bard reverse" />
        else if (eachCard.emblem === "bard_add_2")
            return <img onClick={()=> {player4Add2(eachCard)}} src={bard_add_2} height={100} width={75} alt="bard add 2"/>

        else if (eachCard.emblem === "draw_4")
            return <img onClick={()=> {draw4WildPlayer4(eachCard)} } src={wild_draw4} height={100} width={75} alt=" wild draw 4"/>
        else if (eachCard.emblem === "wild")
            return <img onClick={()=>{player4WildCard(eachCard)}} src={wild} height={100} width={75} alt="wild"/>     
        // })
        else 
            console.log("Player 4 messed up card:", eachCard)
        
    })}

    function assigningBackofCard(){
        return < img src={backOfCard} height={100} width={75} alt="This is the back" />
    }
// console.log("Player4 hand state in card component:", player4HandState)
// console.log("player 2 state in card component:", player2HandState)
// console.log("player 3 state in card component:", player3HandState)
// console.log("player 4 state in card component:", player4HandState)

    // if card.name === number 
    //     return nextturn()
    return(
        <>{displayCard ? cardImageAssignment() : assigningBackofCard} </>
        

    )
}
export default Player4Card;

