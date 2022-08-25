import styled from "styled-components";
import { useEffect, useState} from "react";

import My_Hand from "./My_Hand";
import Other_Player2 from './other_players_hands/Other_Player2'
import Other_Player3 from './other_players_hands/Other_Player3'
import Other_Player4 from './other_players_hands/Other_Player4'

const Container = styled.div`

`


function ActiveGame(){

    // function putDownACard(){
    //         const cardToPlay = "selected card"
    //         //  hands aren't being persisted so im not 
    //             // sure for the url or the updated date
    //         }
    //         function adding2s(){
    //             if (cardToPlay === "thief_add_2")
    //                 return patchtoUpdateNextPlayerHand()
    //             else if (cardToPlay === "bard_add_2")
    //                 return patchtoUpdateNextPlayerHand()
    //             else if (cardToPlay === "illusionist_add_2")
    //                 return patchtoUpdateNextPlayerHand()
    //             else if (cardToPlay === "druid_add_2")
    //                 return patchtoUpdateNextPlayerHand()
    //         }
    //         function skipping(){
    //         //  need to look at last card played and current player turn 
    //         }
    //         function reversing(){
    //         //  need to look at last card played and current player turn 
    //         }
    //         function wild_add4(){
    //         //  not stackable so just needs to know current player turn to add cards to next player 
    //         }
    //     if (currentEmblem === cardToPlay.emblem)
    //         return cardToPlay
    //     else if(currentValue === cardToPlay.vlaue)
    //         return cardToPlay
    //     else if (currentEmblem === "thief_reverse" || currentEmblem ==== thief_1 || thief_2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12|| curentEmblem === bard_reverse)
    //         return reversing()
    //     else if (currentEmblem === "bard_reverse")
    //         return reversing()
    //     else if (currentEmblem === "illusionist_reverse")
    //         return reversing()
    //     else if (currentEmblem === "druid_reverse")
    //     return reversing()
    //     else if (currentEmblem === "thief_add_2")
    //         return adding2s()
    //     else if (currentEmblem === "bard_add_2")
    //         return adding2s()
    //     else if (currentEmblem === "illusionist_add_2")
    //         return adding2s()
    //     else if (currentEmblem === "druid_add_2")
    //     return adding2s()
    //     else if (currentEmblem === "thief_skip")
    //         return skipping()
    //     else if (currentEmblem === "bard_skip")
    //         return skipping()
    //     else if (currentEmblem === "illusionist_skip")
    //         return skipping()
    //     else if (currentEmblem === "druid_skip")
    //     return skipping()
    //     else if(selectedCard.emblem === "wild" )
    //         return cardToPlay, "something that announces the new emblem"
    //     else if (selectedCard.emblem === "draw 4")
    //         return wild_add4()
    //     else if (selectedCard != currentEmblem)
    //         return "A card must match in color or value. Otherwise play a wild card."
    //     else if (selectedCard != currentValue)
    //         return "A card must match in color or value. Otherwise play a wild card."
    // }
 


    /* moving between players */

    const players = ["player_1", "player_2", "player_3", "player_4"]

    const [playerTurn, setPlayerTurn] = useState(players[0]) 
    const [clockWise, setClockwise]= useState(true)
    const [initialTurn, setInitialTurn] = useState(true)
    // const [playerTurn, setPlayerTurn] = useState({gametable.player_1})
    const [displayCard, setDisplayCard] = useState(false)
    // function onceGamehasStartedSeeCards(){
    //    return setDisplayCard(true) 
    // }

//     
    const [completeDeck, setCompleteDeck] = useState([])
    const [drawingDeck, setDrawingDeck] = useState([])
    const [playedCards, setPlayedCards] = useState([])
    const thePlayedCardsArray = []
    const Player4Hand =[]
    const [player4HandState, setPlayer4HandState] = useState([Player4Hand])
    const Player3Hand = []
    const [player3HandState, setPlayer3HandState] = useState([Player3Hand])
    const Player2Hand = []
    const [ player2HandState, setPlayer2HandState] = useState([Player2Hand])
    const MyHand = []
    const [myHandState, setMyHandState] = useState(MyHand)
    const [gameInProgress, setGameInProgress] = useState(false)
    

    useEffect( ()=>{
        fetch("http://localhost:3000/cards")
        .then(res => res.json())
        .then(data => setCompleteDeck(data))
    }, [])

   console.log("complete deck:", completeDeck)

   function startingTheGame(){
        // if ( myHandState > 7 && player2HandState > 7 && player3HandState > 7 && player4HandState > 7)
            return setGameInProgress(true)
    }

    console.log("gameinSession:", gameInProgress)

    // let randomArray = [1, 5, 7, 68, 43, 35, 2, 10]

    function getARandomCard(arrayOfCards){
        const randomIndex = Math.floor(Math.random()* arrayOfCards.length)
        const randomCard = arrayOfCards[randomIndex]
        return randomCard
    }
    

    function drawingFromUpdatedDeck(){
        const cardToAddToHand = addsCardToHand()
        const updatedDrawingDeck = drawingDeck.filter((card) =>{
            return card.id != cardToAddToHand.id
        })
        setDrawingDeck([updatedDrawingDeck])
    }

        function whenDrawingDeckisZero(){
            if (drawingDeck < 1)
            setDrawingDeck([completeDeck])
        }


     function addsCardToHand(){
        // const newCard = getARandomCard(completeDeck)
        const newCard = getARandomCard(drawingDeck)
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
    
    // function draw4WildPlayer1(){
    //     const Card1=getARandomCard(updatedDeck)
    //     const Card2=getARandomCard(updatedDeck)
    //     const Card3=getARandomCard(updatedDeck)
    //     const Card4=getARandomCard(updatedDeck)
        
    //      if ("player_1" === playerTurn && clockWise === true)
           
    //         return setPlayer2HandState([card1, card2, card3, card4, ...player2HandState])
    //     if ("player_1" === playerTurn && clockWise === false)
          
    //         return setPlayer4HandState ([card1, card2, card3, card4, ...player4HandState])
    // }

    // function draw4WildPlayer2(){
    //     const Card1=getARandomCard(updatedDeck)
    //     const Card2=getARandomCard(updatedDeck)
    //     const Card3=getARandomCard(updatedDeck)
    //     const Card4=getARandomCard(updatedDeck)
        
    //      if ("player_2" === playerTurn && clockWise === true)
           
    //         return setPlayer3HandState([card1, card2, card3, card4, ...player3HandState])
    //     if ("player_2" === playerTurn && clockWise === false)
          
    //         return setmyHandState ([card1, card2, card3, card4, ...myHandState])
    // }

    // function draw4WildPlayer3(){
    //     const Card1=getARandomCard(updatedDeck)
    //     const Card2=getARandomCard(updatedDeck)
    //     const Card3=getARandomCard(updatedDeck)
    //     const Card4=getARandomCard(updatedDeck)
        
    //      if ("player_3" === playerTurn && clockWise === true)
           
    //         return setPlayer4HandState([card1, card2, card3, card4, ...player4HandState])
    //     if ("player_2" === playerTurn && clockWise === false)
          
    //         return setplayer2HandState ([card1, card2, card3, card4, ...player2HandState])
    // }

    // function draw4WildPlayer2(){
    //     const Card1=getARandomCard(updatedDeck)
    //     const Card2=getARandomCard(updatedDeck)
    //     const Card3=getARandomCard(updatedDeck)
    //     const Card4=getARandomCard(updatedDeck)
        
    //      if ("player_4" === playerTurn && clockWise === true)
           
    //         return setMyHandState([card1, card2, card3, card4, ...myHandState])
    //     if ("player_4" === playerTurn && clockWise === false)
          
    //         return setPlayer3HandState ([card1, card2, card3, card4, ...player3HandState])
    // }
    

    // console.log("The random card:", getARandomCard(completeDeck))
    
    
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

        setDisplayCard(true)  
    }

    

    console.log("my hand:", myHandState)
    console.log("player 2 hand:", player2HandState)
    console.log("player 3 hand:", player3HandState)
    console.log("player 4 hand:", player4HandState)


    function addsCardToHand(){
        const newCard = getARandomCard(drawingDeck)
        // const newCard = getARandomCard(drawingDeck)
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
    console.log("PLAYER TURN:", playerTurn)
    // console.log("first player:", players[0])
console.log("played cards pile:", playedCards)
    



    function player1Turn(card){
        console.log("click:", card)
        const cardToDelete = myHandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
            myHandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)

        setInitialTurn(false)
        if ("player_1" === playerTurn && clockWise === true)
            return setPlayerTurn("player_2") 
        else if ("player_1" ===playerTurn && clockWise === false)
            return setPlayerTurn("player_4")
        
    }
    function player2Turn(card){
        const cardToDelete = player2HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = player2HandState.indexOf(cardToDelete)
            player2HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
       
       if ("player_2" === playerTurn && clockWise === true)
            return setPlayerTurn("player_3") 
        else if ("player_2" === playerTurn && clockWise === false)
            return setPlayerTurn("player_1")
        
    }
    function player3Turn(card){
        const cardToDelete = player3HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = player3HandState.indexOf(cardToDelete)
            player3HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
       
        if ("player_3" === playerTurn && clockWise === true)
            return setPlayerTurn("player_4")
        else if ("player_3" === playerTurn && clockWise === false)
            return setPlayerTurn("player_2")
   }

    function player4Turn(card){
        const cardToDelete = player4HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = player4HandState.indexOf(cardToDelete)
            player4HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        if ("player_4" === playerTurn && clockWise === true )
            return setPlayerTurn("player_1")  
        else if ("player_4" === playerTurn && clockWise === false)
            return setPlayerTurn("player_3")      
}

    function player1Add2(card){
        const cardToDelete = myHandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
            myHandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        const card1 = getARandomCard(completeDeck)
        const card2 = getARandomCard(completeDeck)
        
        if ("player_1" === playerTurn && clockWise === true)
           
            return setPlayer2HandState([card1, card2, ...player2HandState])
        if ("player_1" === playerTurn && clockWise === false)
          
            return setPlayer4HandState ([card1, card2, ...player4HandState])
    }

    
    function player2Add2(card){
        const cardToDelete = player2HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = player2HandState.indexOf(cardToDelete)
            player2HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        const card1 = getARandomCard(completeDeck)
        const card2 = getARandomCard(completeDeck)
        
        if ("player_2" === playerTurn && clockWise === true)
           
            return setPlayer3HandState([card1, card2, ...player3HandState])
        if ("player_2" === playerTurn && clockWise === false)
          
            return setMyHandState ([card1, card2, ...myHandState])
    }
    

    function player3Add2(card){
        const cardToDelete = player3HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = player3HandState.indexOf(cardToDelete)
            player3HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        const card1 = getARandomCard(completeDeck)
        const card2 = getARandomCard(completeDeck)
        
        if ("player_3" === playerTurn && clockWise === true)
           
            return setPlayer4HandState([card1, card2, ...player4HandState])
        if ("player_3" === playerTurn && clockWise === false)
          
            return setPlayer2HandState ([card1, card2, ...player2HandState])
    }

    function player4Add2(card){
        const cardToDelete = player4HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = player4HandState.indexOf(cardToDelete)
            player4HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        const card1 = getARandomCard(completeDeck)
        const card2 = getARandomCard(completeDeck)
        
        if ("player_4" === playerTurn && clockWise === true)
           
            return setMyHandState([card1, card2, ...myHandState])
        if ("player_4" === playerTurn && clockWise === false)
          
            return setPlayer3HandState ([card1, card2, ...player3HandState])
    }
    
    

    console.log("CLOCKWISE:", clockWise)
    
    /// REVERSE CARD LOGIC 

    useEffect(()=>{
        console.log("useEffect happening")
        if (initialTurn)
            return "hi"
        else if ("player_4" === playerTurn && clockWise === false)
            return setPlayerTurn("player_3") 
        else if ("player_4" === playerTurn && clockWise === true)
            return setPlayerTurn("player_1")
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

    function player1HandleReverse(card){
        const cardToDelete = myHandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
            myHandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
    }
    
    function player2HandleReverse(card){
        const cardToDelete = player2HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
    })
        const deleteSpecificIndex = player2HandState.indexOf(cardToDelete)
            player2HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
    }
    
    function player3HandleReverse(card){
        const cardToDelete = player3HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
})
        const deleteSpecificIndex = player3HandState.indexOf(cardToDelete)
            player3HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
    }

    function player4HandleReverse(card){
        const cardToDelete = player4HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
})
        const deleteSpecificIndex = player4HandState.indexOf(cardToDelete)
            player4HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
    }

        

    function player1Skip(card){
        const cardToDelete = myHandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
            myHandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        setInitialTurn(false)
        if ("player_1" === playerTurn && clockWise === true)
           return setPlayerTurn("player_3") 
        else if ("player_1" === playerTurn && clockWise === false)    
            return setPlayerTurn("player_3")   
   }
    function player2Skip(card){
        const cardToDelete = player2HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
    })
        const deleteSpecificIndex = player2HandState.indexOf(cardToDelete)
            player2HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
       
       if ("player_2" === playerTurn && clockWise === true)
           return setPlayerTurn("player_4") 
        else if ("player_2" === playerTurn && clockWise === false)
            return setPlayerTurn("player_4") 
   }
    function player3Skip(card){
        const cardToDelete = player3HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
})
        const deleteSpecificIndex = player3HandState.indexOf(cardToDelete)
            player3HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
        
        if ("player_3" === playerTurn && clockWise === true)
            return setPlayerTurn("player_1") 
        else if ("player_3" === playerTurn && clockWise === false)
            return setPlayerTurn("player_1") 
   }
  
   function player4Skip(card){
        const cardToDelete = player4HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
})
        const deleteSpecificIndex = player4HandState.indexOf(cardToDelete)
            player4HandState.splice(deleteSpecificIndex, 1)
            playedCards.push(cardToDelete)
       
         if ("player_4" === playerTurn && clockWise === true)
           return setPlayerTurn("player_2")
        else if ("player_4" === playerTurn && clockWise === false)
            return setPlayerTurn("player_2")
  }

    

    return(
        <Container>
            <h3> Its my turn: {playerTurn} </h3> 
            <div>
                <button onClick={startingTheGame}>Start Game</button>
                <button onClick={startingHands}> Distribute First Hand </button>
            </div>
            <div >
    
                    <My_Hand 
                    completeDeck={completeDeck}
                    displayCard={displayCard} 
                    // onceGamehasStartedSeeCards={onceGamehasStartedSeeCards}
                    player1Turn={player1Turn} 
                    player1Skip={player1Skip} 
                    player1HandleReverse={player1HandleReverse} 
                    myHandState={myHandState}
                    player1Add2={player1Add2}
                    />
                    
        
            </div> 

            <div>
                
                    <Other_Player2 
                    displayCard={displayCard} 
                    completeDeck={completeDeck}
                    // dontSeeTheCards={seeingBackofCard} 
                    player2Turn={player2Turn} 
                    player2Skip={player2Skip} 
                    player2HandleReverse={player2HandleReverse} 
                    player2HandState={player2HandState}
                    player2Add2={player2Add2}/>
                    
                    
            </div> 

            <div>
                
                    <Other_Player3 
                    displayCard={displayCard} 
                    completeDeck={completeDeck}
                    // dontSeeTheCards={seeingBackofCard} 
                    player3Turn={player3Turn} 
                    player3Skip={player3Skip} 
                    player3HandleReverse={player3HandleReverse} 
                    player3HandState={player3HandState}
                    player3Add2={player3Add2}/>
                    
            </div> 

            <div>
                
                    <Other_Player4 
                    displayCard={displayCard} 
                    completeDeck={completeDeck}
                    // dontSeeTheCards={seeingBackofCard} 
                    player4Turn={player4Turn} 
                    player4Skip={player4Skip} 
                    player4HandleReverse={player4HandleReverse}
                    player4HandState={player4HandState}
                    player4Add2={player4Add2} />
                    
            </div> 
            <br></br>
            <div>
                <button onClick={addsCardToHand}>Draw Card</button>
            </div>
            <div> 
                <h6> Played Cards</h6>
                - make an empty array
                - add cards that array in click on card, and [card1, ...playedCard]
            </div>


            </Container>
    )
}
export default ActiveGame