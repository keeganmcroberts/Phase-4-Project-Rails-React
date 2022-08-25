import styled from "styled-components";
import { useEffect, useState} from "react";

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
    )
    // shuffle cards DONE 
    // 7 random cards for each player to start DONE
    // 1 random card for the playedDeck pile (this starts this game ) DONE
    // add remaining cards to the drawingDeck (i dont think we need to do this, as we've set the drawing deck
        //  to infinitely shuffle through all the fetched cards)
    // set currentColor and currentNumber states to the card played in the playedDeck 
    // set playerTurn state to player 1 DONE 
   */
    
    // const [activeGame, setActiveGame] = useState(false)
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
    const [initialTurn, setInitialTurn] = useState(true)
    // const [playerTurn, setPlayerTurn] = useState({gametable.player_1})
    const [displayCard, setDisplayCard] = useState(true)
    function seeingBackofCard(){
       return setDisplayCard(false) 
    }

//     
    const [completeDeck, setCompleteDeck] = useState([])
    const Player4Hand =[]
    const [player4HandState, setPlayer4HandState] = useState([Player4Hand])
    const Player3Hand = []
    const [player3HandState, setPlayer3HandState] = useState([Player3Hand])
    const Player2Hand = []
    const [ player2HandState, setPlayer2HandState] = useState([Player2Hand])
    const MyHand = []
    const [myHandState, setMyHandState] = useState(MyHand)
    

    useEffect( ()=>{
        fetch("http://localhost:3000/cards")
        .then(res => res.json())
        .then(data => setCompleteDeck(data))
        
    

    }, [])

   console.log("complete deck:", completeDeck)



    // let randomArray = [1, 5, 7, 68, 43, 35, 2, 10]

    function getARandomCard(arrayOfCards){
        const randomIndex = Math.floor(Math.random()* arrayOfCards.length)
        const randomCard = arrayOfCards[randomIndex]
        return randomCard
    }

    console.log("The random card:", getARandomCard(completeDeck))
    
    
    function StartingSevenCards(){ // setMyHand state to this array
     const card1 = getARandomCard(completeDeck)
     const card2 = getARandomCard(completeDeck)
     const card3 = getARandomCard(completeDeck)
     const card4 = getARandomCard(completeDeck)
     const card5 = getARandomCard(completeDeck)
     const card6 = getARandomCard(completeDeck)
     const card7 = getARandomCard(completeDeck)
    
     return([card1, card2, card3, card4, card5, card6, card7])     
    }
    console.log("Starting Hand:", StartingSevenCards())

    function startingHands(){
        setMyHandState(StartingSevenCards)
        setPlayer2HandState(StartingSevenCards)
        setPlayer3HandState(StartingSevenCards)
        setPlayer4HandState(StartingSevenCards)
    }

    

    console.log("my hand:", myHandState)
    console.log("player 2 hand:", player2HandState)
    console.log("player 3 hand:", player3HandState)
    console.log("player 4 hand:", player4HandState)


    function addsCardToHand(){
        const newCard = getARandomCard(completeDeck)
        console.log("NEWCARD:", newCard)
        if ("player_1" === playerTurn)
            return setMyHandState([newCard, ...myHandState])

        else if ("player_2" === playerTurn)
            return setPlayer2HandState([newCard, ...player2HandState])

        else if ("player_3" === playerTurn)
            return setPlayer3HandState([newCard, ...player3HandState])

        else if ("player_4" === playerTurn)
            return setPlayer4HandState([newCard, ...player4HandState])
    }
    // console.log("adding card to hand:", addsCardToHand)
    console.log("New Hand For My Player:", myHandState)
    console.log("New Hand For Playerc 3:", player3HandState)
    console.log("NewHand For Player2", player2HandState)
    console.log("New Hand For Playerc 4:", player4HandState)
    

   
//     TO Determine Player Turn 
    console.log("playerTurn:", playerTurn)
    console.log("first player:", players[0])

    
    function player1Turn(){
        console.log("click")
        setInitialTurn(false)
        if ("player_1" === playerTurn && clockWise === true)
            return setPlayerTurn("player_2") 
        else if ("player_1" ===playerTurn && clockWise === false)
            return setPlayerTurn("player_4")
    }
    function player2Turn(){
       
       if ("player_2" === playerTurn && clockWise === true)
            return setPlayerTurn("player_3") 
        else if ("player_2" === playerTurn && clockWise === false)
            return setPlayerTurn("player_1")
        
    }
    function player3Turn(){
       
        if ("player_3" === playerTurn && clockWise === true)
            return setPlayerTurn("player_4")
        else if ("player_3" === playerTurn && clockWise === false)
            return setPlayerTurn("player_2")
   }

    function player4Turn(){
        
        if ("player_4" === playerTurn && clockWise === true )
            return setPlayerTurn("player_1")  
        else if ("player_4" === playerTurn && clockWise === false)
            return setPlayerTurn("player_3")      
}

    console.log("order direction:", clockWise)
    
    /// REVERSE CARD LOGIC 

    useEffect(()=>{
        console.log("useEffect happening")
        if (initialTurn)
            return "hi"
        else if ("player_4" === playerTurn && clockWise === false)
            return setPlayerTurn("player_1") 
        else if ("player_4" === playerTurn && clockWise === true)
            return setPlayerTurn("player_3")
        else if ("player_3" === playerTurn && clockWise === false)
            return setPlayerTurn("player_2") 
        else if ("player_3" === playerTurn && clockWise === true)
            return setPlayerTurn("player_4")
        else if ("player_2" === playerTurn && clockWise === false)
            return setPlayerTurn("player_1")
        else if ("player_2" === playerTurn && clockWise === true)
            return setPlayerTurn("player_3")
        else if ("player_1" === playerTurn && clockWise === false)
            return setPlayerTurn("player_4")   
        else if ("player_1" === playerTurn && clockWise === true)     
            return setPlayerTurn("player_2")
    }, [clockWise]) 

    function handleReverse(){
        setClockwise(!clockWise)
        setInitialTurn(false)
    }

        

    function player1Skip(){
        setInitialTurn(false)
        if ("player_1" === playerTurn && clockWise === true)
           return setPlayerTurn("player_3") 
        else if ("player_1" === playerTurn && clockWise === false)    
            return setPlayerTurn("player_3")   
   }
   function player2Skip(){
       
       if ("player_2" === playerTurn && clockWise === true)
           return setPlayerTurn("player_4") 
        else if ("player_2" === playerTurn && clockWise === false)
            return setPlayerTurn("player_4") 
   }
   function player3Skip(){
        if ("player_3" === playerTurn && clockWise === true)
            return setPlayerTurn("player_1") 
        else if ("player_3" === playerTurn && clockWise === false)
            return setPlayerTurn("player_1") 
   }
  
   function player4Skip(){
       if ("player_4" === playerTurn && clockWise === true)
           return setPlayerTurn("player_2")
        else if ("player_4" === playerTurn && clockWise === false)
        return setPlayerTurn("player_2")
  }

    

    return(
        <Container>
            <h3> Its my turn: {playerTurn} </h3> 
            <div>
                <button onClick={startingHands}>Start Game</button>
            </div>
            <div >
    
                    <My_Hand 
                    completeDeck={completeDeck}
                    seethecards={displayCard} 
                    player1Turn={player1Turn} 
                    player1Skip={player1Skip} 
                    handleReverse={handleReverse} 
                    myHandState={myHandState}/>
        
            </div> 

            <div>
                
                    <Other_Player2 
                    completeDeck={completeDeck}
                    dontSeeTheCards={seeingBackofCard} 
                    player2Turn={player2Turn} 
                    player2Skip={player2Skip} 
                    handleReverse={handleReverse} 
                    player2HandState={player2HandState}/>
                    
            </div> 

            <div>
                
                    <Other_Player3 
                    completeDeck={completeDeck}
                    dontSeeTheCards={seeingBackofCard} 
                    player3Turn={player3Turn} 
                    player3Skip={player3Skip} 
                    handleReverse={handleReverse} 
                    player3HandState={player3HandState}/>
                    
            </div> 

            <div>
                
                    <Other_Player4 
                    completeDeck={completeDeck}
                    dontSeeTheCards={seeingBackofCard} 
                    player4Turn={player4Turn} 
                    player1Skip={player4Skip} 
                    handleReverse={handleReverse}
                    player4HandState={player4HandState}/>
                    
            </div> 
            <br></br>
            <div>
                <button onClick={addsCardToHand}>Draw Card</button>
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