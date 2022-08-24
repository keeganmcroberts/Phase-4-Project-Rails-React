import styled from "styled-components";
import { useState} from "react";

import My_Hand from "./My_Hand";
import Other_Player2 from './other_players_hands/Other_Player2'
import Other_Player3 from './other_players_hands/Other_Player3'
import Other_Player4 from './other_players_hands/Other_Player4'

const Container = styled.div`

`

function ActiveGame(){
    // set minimum and max number of players in each game 
    //  player hands are dependant on the number of players

    //  in each componenet of player hands each player starts with seven cards
    //  update request to add and delete cards from each hand as theyre picked up and played
 /*
   useEffect(()=> {
    fetch("to local host")
    .then(res => res.json())
    .then (cards => getArandomCard(cards),

    setMyHand(myStartingSevenCards()), 

    playedDeckStartCard(),

    // setEmblemColor(playedDeckStartCard.emblem),

    setCurrentValue(playedDeckStartCard.value),

    setPlayerTurn(myPlayerHand)
    
    

    
    )
    // shuffle cards DONE 
    // 7 random cards for each player to start DONE
    // 1 random card for the playedDeck pile (this starts this game ) DONE
    // add remaining cards to the drawingDeck (i dont think we need to do this, as we've set the drawing deck
        //  to infinitely shuffle through all the fetched cards)
    // set currentColor and currentNumber states to the card played in the playedDeck 
    // set playerTurn state to player 1 DONE 
   }, [])
   */
    
    // const [activeGame, setActiveGame] = useState(false)
    // const [myHand, setMyHand] = useState([])
    // const [otherPlayer1Hand, setOtherPlayer1Hand] = useState([])
    // const [otherPlayer2Hand, setOtherPlayer2Hand] = useState([])
    // const [otherPlayer3Hand, setOtherPlayer3Hand] = useState([])
    // const [drawingDeck, setDrawingDeck] = useState([])
    // const [playedDeck, setPlayedDeck] = useState([])
    // // const [playerTurn, setPlayerTurn] = useState('')
    // //  this is going to be a part of the reverse and the skip cards 
    // const [currentEmblem, setCurrentEmblem] = useState('')
    // const [currentValue, setCurrentValue] = useState('')
    //  this is going to be for played cards, if card - state next player, otherwise error  
    
    //  the suffled deck is the drawing deck, the shuffle deck function is current just giving a random card
    // nned two function one to shuffle the deck, and one to dish out a single card 
    /*
    function getArandomCard(){
         return cards.Math.floor(Math.random()*cards.length)
    }

    function myStartingSevenCards(){ // setMyHand state to this array
        const card1 = getArandomCard()
        const card2 = getArandomCard()
        const card3 = getArandomCard()
        const card4 = getArandomCard()
        const card5 = getArandomCard()
        const card6 = getArandomCard()
        const card7 = getArandomCard()

        return([card1, card2, card3, card4, card5, card6, card7])
    }

    function playedDeckStartCard(){ //setPlayedDeck to this card
        const firstCard = getArandomCard()
        return firstCard
    }
    
    //  i think this goes on the onclick function for the drawing deck
    //  still need an update request here to add it to the hand 

    //  figure out how not to shuffle every time  (might need to do reverse then pop)
    function pickUpACard(){
        const topCardOfDrawingDeck = getArandomCard()
        return topCardOfDrawingDeck
    }
    
    function putDownACard(){
            const cardToPlay = "selected card"
            //  hands aren't being persisted so im not 
                // sure for the url or the updated date
            function patchtoUpdateNextPlayerHand(){
                fetch("url/${player.id}", {
                    method: "PATCH", 
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify("next player hand state")
                })
                .then( res =>res.json)
                .then()
            }
            function adding2s(){
                if (cardToPlay === "thief_add_2")
                    return patchtoUpdateNextPlayerHand()
                else if (cardToPlay === "bard_add_2")
                    return patchtoUpdateNextPlayerHand()
                else if (cardToPlay === "illusionist_add_2")
                    return patchtoUpdateNextPlayerHand()
                else if (cardToPlay === "druid_add_2")
                    return patchtoUpdateNextPlayerHand()
            }
            function skipping(){
            //  need to look at last card played and current player turn 
            }
            function reversing(){
            //  need to look at last card played and current player turn 
            }
            function wild_add4(){
            //  not stackable so just needs to know current player turn to add cards to next player 
            }
        if (currentEmblem === cardToPlay.emblem)
            return cardToPlay
        else if(currentValue === cardToPlay.vlaue)
            return cardToPlay
        else if (currentEmblem === "thief_reverse")
            return reversing()
        else if (currentEmblem === "bard_reverse")
            return reversing()
        else if (currentEmblem === "illusionist_reverse")
            return reversing()
        else if (currentEmblem === "druid_reverse")
        return reversing()
        else if (currentEmblem === "thief_add_2")
            return adding2s()
        else if (currentEmblem === "bard_add_2")
            return adding2s()
        else if (currentEmblem === "illusionist_add_2")
            return adding2s()
        else if (currentEmblem === "druid_add_2")
        return adding2s()
        else if (currentEmblem === "thief_skip")
            return skipping()
        else if (currentEmblem === "bard_skip")
            return skipping()
        else if (currentEmblem === "illusionist_skip")
            return skipping()
        else if (currentEmblem === "druid_skip")
        return skipping()
        else if(selectedCard.emblem === "wild" )
            return cardToPlay, "something that announces the new emblem"
        else if (selectedCard.emblem === "draw 4")
            return wild_add4()
        else if (selectedCard != currentEmblem)
            return "A card must match in color or value. Otherwise play a wild card."
        else if (selectedCard != currentValue)
            return "A card must match in color or value. Otherwise play a wild card."
    }
 
    */

    /* 
    moving between players 
    - 
    */ 

    const players = ["player_1", "player_2", "player_3", "player_4"]

    const [playerTurn, setPlayerTurn] = useState(players[0]) 
    const [clockWise, setClockwise]= useState(true)
    // const [playerTurn, setPlayerTurn] = useState({gametable.player_1})
    const [frontOfCard, setFrontOfCard] = useState(true)
    function seeingBackofCard(){
       return setFrontOfCard(false)
    }

    
    
    console.log("playerTurn:", playerTurn)
    console.log("first player:", players[0])

    
    function player1Turn(){
        console.log("click")
        if ("player_1" === playerTurn)
            return setPlayerTurn("player_2") 
    }
    function player2Turn(){
       if ("player_2" === playerTurn)
        return setPlayerTurn("player_3") 
    }
   function player3Turn(){
        if ("player_3" === playerTurn)
            return setPlayerTurn("player_4")
   }

   function player4Turn(){
    if ("player_4" === playerTurn && clockWise === true )
       return setPlayerTurn("player_1")  
    else if ("player_4" === playerTurn && clockWise === false)
       return setPlayerTurn("player_3")      
}

   function player1Reverse(){
        if ("player_1" === playerTurn)
            setClockwise(!clockWise)
            return setPlayerTurn("player_4")        
    }

    console.log("order direction:", clockWise)
    function player4Reverse(){
        if ("player_4" === playerTurn)
            setClockwise(!clockWise)
        return setPlayerTurn("player_3") 
    }
    function player3Reverse(){
        if ("player_3" === playerTurn)
            setClockwise(!clockWise)
            return setPlayerTurn("player_2") 
    }
    function player2Reverse(){
        if ("player_2" === playerTurn)
            setClockwise(!clockWise)
            return setPlayerTurn("player_1")
    }

    function player1Skip(){
        if ("player_1" === playerTurn)
           return setPlayerTurn("player_3")        
   }
   function player2Skip(){
       if ("player_2" === playerTurn)
           return setPlayerTurn("player_4") 
   }
   function player3Skip(){
      if ("player_3" === playerTurn)
       return setPlayerTurn("player_1") 
   }
  function player4Skip(){
       if ("player_4" === playerTurn)
           return setPlayerTurn("player_2")
  }

    

    return(
        <Container>
            {/* <h3> Its my turn: {playerTurn} </h3>  */}
            <div >
                {/* <My_Hand seethecards={frontOfCard} 
                        player1Turn={player1Turn} 
                        player1Skip={player1Skip} 
                        player1Reverse={player1Reverse}/>  */}
                <h2> Player 1</h2>
                <button onClick={player1Turn}> Next </button>
                <button onClick={player1Skip}> Skip </button> 
                <button onClick={player1Reverse}> Reverse </button>   
            </div> 

            <div>
                {/* < Other_Player2
                    dontSeeTheCards={setFrontOfCard} 
                    player2Turn={player2Turn} 
                    player2Skip={player2Skip} 
                    player2Reverse={player2Reverse}/> */}
                <h2> Player 2</h2> 
                    <button onClick={player2Turn}> Next </button>
                    <button onClick={player2Skip}> Skip </button> 
                    <button onClick={player2Reverse}> Reverse </button> 
            </div> 

            <div>
                {/* <Other_Player3 
                    dontSeeTheCards={setFrontOfCard} 
                    player3Skip={player3Skip} 
                    player3Turn={player3Turn} 
                    player3Reverse={player3Reverse}/> */}
                <h2> Player 3</h2> 
                    <button onClick={player3Turn}> Next </button>
                    <button onClick={player3Skip}> Skip </button> 
                    <button onClick={player3Reverse}> Reverse </button> 
            </div> 

            <div>
                {/* <Other_Player4
                    dontSeeTheCards={setFrontOfCard} 
                    player4Skip={player4Skip} 
                    player4Turn={player4Turn} 
                    player4Reverse={player4Reverse}/> */}
                <h2> Player 4 </h2>
                    <button onClick={player4Turn}> Next </button>
                    <button onClick={player4Skip}> Skip </button> 
                    <button onClick={player4Reverse}> Reverse </button>   
            </div> 

            {/* <myPlayerHand cardsInHand/>

            <OtherPlayer1>
                passing player ID for player
            </OtherPlayer1>
            
            <OtherPlayer2>
                passing id for player and player cards 
            </OtherPlayer2> 
            
            <OtherPlayer3>
                passing id for player 
            </OtherPlayer3>

            <div className="drawingDeck">
                "fetched cards data" 
            </div>
            <div className="playedCards">
                "submitted cards from each playerhand"
            </div> 
            
            */}
            </Container>
    )
}
export default ActiveGame