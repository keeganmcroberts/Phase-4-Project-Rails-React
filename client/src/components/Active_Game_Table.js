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
    //         }
    //         function adding2s(){
    //             if (cardToPlay === "thief_add_2")
    //                 return cardToPlay
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
    //     if (cardToPlay.Emblem === card.Emblem)
    //         return cardToPlay
    //     else if(currentValue === cardToPlay.vlaue)
    //         return cardToPlay
    //     else if (card.Emblem === "thief_reverse" || card.Emblem ==== "thief_0" || card.emblem ==== "thief_1" || card.Emblem ==== "thief_2" || card.Emblem ==== "thief_3"|| card.Emblem ==== "thief_4" || || card.Emblem ==== "thief_5" || card.Emblem ==== "thief_6" || card.Emblem ==== "thief_7" || card.Emblem ==== "thief_8" || card.Emblem ==== "thief_9"|| card.Emblem ==== "thief_10" || card.Emblem ==== "thief_11" || card.Emblem ==== "thief_12" || card.Emblem === "bard_reverse" || card.Emblem === "illusionist_reverse" || card.emblem === "druid_reverse" )
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
    const [displayCard, setDisplayCard] = useState(false)
    

//     
    const [completeDeck, setCompleteDeck] = useState([])
    const [drawingDeckState, setDrawingDeckState] = useState([])
    
    const [playedCards, setPlayedCards] = useState([])
    const thePlayedCardsArray = []
    let Player4Hand =[]
    const [player4HandState, setPlayer4HandState] = useState([Player4Hand])
    let Player3Hand = []
    const [player3HandState, setPlayer3HandState] = useState([Player3Hand])
    let Player2Hand = []
    const [ player2HandState, setPlayer2HandState] = useState([Player2Hand])
    let MyHand = []
    const [myHandState, setMyHandState] = useState(MyHand)
    const [gameInProgress, setGameInProgress] = useState(false)
    

    useEffect( ()=>{
        fetch("http://localhost:3000/cards")
        .then(res => res.json())
        .then(data => {setCompleteDeck(data)
                        setDrawingDeckState(data)    
        })
    }, [])

   console.log("complete deck:", completeDeck)

   function startingTheGame(){
            return setGameInProgress(true)
    }

    console.log("gameinSession:", gameInProgress)


    function getARandomCard(arrayOfCards){
        const randomIndex = Math.floor(Math.random()* arrayOfCards.length)
        const randomCard = arrayOfCards[randomIndex]
        return randomCard
    }


        function whenDrawingDeckisZero(){
            if (drawingDeckState < 80)
            setDrawingDeckState([completeDeck])
        }

    console.log("The add card to hand function:",  addsCardToHand)
    
    function draw4WildPlayer1(card){
        const Card1=getARandomCard(drawingDeckState)
        const Card2=getARandomCard(drawingDeckState)
        const Card3=getARandomCard(drawingDeckState)
        const Card4=getARandomCard(drawingDeckState)
        const cardToDelete = myHandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
            myHandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
         if ("player_1" === playerTurn && clockWise === true)
           
            return setPlayer2HandState([Card1, Card2, Card3, Card4, ...player2HandState])
        if ("player_1" === playerTurn && clockWise === false)
          
            return setPlayer4HandState ([Card1, Card2, Card3, Card4, ...player4HandState])
    }

    function draw4WildPlayer2(card){
        const Card1=getARandomCard(drawingDeckState)
        const Card2=getARandomCard(drawingDeckState)
        const Card3=getARandomCard(drawingDeckState)
        const Card4=getARandomCard(drawingDeckState)
        
        const cardToDelete = player2HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = player2HandState.indexOf(cardToDelete)
            player2HandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
         if ("player_2" === playerTurn && clockWise === true)
           
            return setPlayer3HandState([Card1, Card2, Card3, Card4, ...player3HandState])
        if ("player_2" === playerTurn && clockWise === false)
          
            return setMyHandState ([Card1, Card2, Card3, Card4, ...myHandState])
    }

    function draw4WildPlayer3(card){
        const Card1=getARandomCard(drawingDeckState)
        const Card2=getARandomCard(drawingDeckState)
        const Card3=getARandomCard(drawingDeckState)
        const Card4=getARandomCard(drawingDeckState)
        
        const cardToDelete = player3HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = player3HandState.indexOf(cardToDelete)
            player3HandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
         if ("player_3" === playerTurn && clockWise === true)
           
            return setPlayer4HandState([Card1, Card2, Card3, Card4, ...player4HandState])
        if ("player_2" === playerTurn && clockWise === false)
          
            return setPlayer2HandState ([Card1, Card2, Card3, Card4, ...player2HandState])
    }

    function draw4WildPlayer4(card){
        const Card1=getARandomCard(drawingDeckState)
        const Card2=getARandomCard(drawingDeckState)
        const Card3=getARandomCard(drawingDeckState)
        const Card4=getARandomCard(drawingDeckState)

        const cardToDelete = player4HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = player4HandState.indexOf(cardToDelete)
            player4HandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
         if ("player_4" === playerTurn && clockWise === true)
           
            return setMyHandState([Card1, Card2, Card3, Card4, ...myHandState])
        if ("player_4" === playerTurn && clockWise === false)
          
            return setPlayer3HandState ([Card1, Card2, Card3, Card4, ...player3HandState])
    }
        
    
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
        if (drawingDeckState < 80)
            setDrawingDeckState([completeDeck])
        const newCard = getARandomCard(drawingDeckState)
        console.log("NEWCARD:", newCard)
        const deckToDrawFrom = drawingDeckState.indexOf(newCard)
        console.log("decktoDrawFrom:", deckToDrawFrom)
        drawingDeckState.splice(deckToDrawFrom, 1)

            console.log("DECK TO DRAW FROM:", deckToDrawFrom)
        
        
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

    console.log("Thhe drawing Deck:", drawingDeckState)
    

   
//     TO Determine Player Turn 
    console.log("PLAYER TURN:", playerTurn)
    console.log("played cards pile:", playedCards)
    


    function player1Turn(card){
        console.log("click:", card)
        const cardToDelete = myHandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
            myHandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)

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
            playedCards.unshift(cardToDelete)
       
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
            playedCards.unshift(cardToDelete)
       
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
            playedCards.unshift(cardToDelete)
        
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
            playedCards.unshift(cardToDelete)
        
        const card1 = getARandomCard(drawingDeckState)
        const card2 = getARandomCard(drawingDeckState)
        
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
            playedCards.unshift(cardToDelete)
        
        const card1 = getARandomCard(drawingDeckState)
        const card2 = getARandomCard(drawingDeckState)
        
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
            playedCards.unshift(cardToDelete)
        
        const card1 = getARandomCard(drawingDeckState)
        const card2 = getARandomCard(drawingDeckState)
        
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
            playedCards.unshift(cardToDelete)
        
        const card1 = getARandomCard(drawingDeckState)
        const card2 = getARandomCard(drawingDeckState)
        
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
            playedCards.unshift(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
    }
    
    function player2HandleReverse(card){
        const cardToDelete = player2HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
    })
        const deleteSpecificIndex = player2HandState.indexOf(cardToDelete)
            player2HandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
    }
    
    function player3HandleReverse(card){
        const cardToDelete = player3HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
})
        const deleteSpecificIndex = player3HandState.indexOf(cardToDelete)
            player3HandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
    }

    function player4HandleReverse(card){
        const cardToDelete = player4HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
})
        const deleteSpecificIndex = player4HandState.indexOf(cardToDelete)
            player4HandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
    }

        

    function player1Skip(card){
        const cardToDelete = myHandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
            myHandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
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
            playedCards.unshift(cardToDelete)
       
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
            playedCards.unshift(cardToDelete)
        
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
            playedCards.unshift(cardToDelete)
       
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
                    player1Turn={player1Turn} 
                    player1Skip={player1Skip} 
                    player1HandleReverse={player1HandleReverse} 
                    myHandState={myHandState}
                    player1Add2={player1Add2}
                    draw4WildPlayer1={draw4WildPlayer1}
                    />
                    
        
            </div> 

            <div>
                
                    <Other_Player2 
                    displayCard={displayCard} 
                    completeDeck={completeDeck}
                    player2Turn={player2Turn} 
                    player2Skip={player2Skip} 
                    player2HandleReverse={player2HandleReverse} 
                    player2HandState={player2HandState}
                    player2Add2={player2Add2}
                    draw4WildPlayer2={draw4WildPlayer2}/>
                    
                    
            </div> 

            <div>
                
                    <Other_Player3 
                    displayCard={displayCard} 
                    completeDeck={completeDeck}
                    player3Turn={player3Turn} 
                    player3Skip={player3Skip} 
                    player3HandleReverse={player3HandleReverse} 
                    player3HandState={player3HandState}
                    player3Add2={player3Add2}
                    draw4WildPlayer3={draw4WildPlayer3}/>
                    
            </div> 

            <div>
                
                    <Other_Player4 
                    displayCard={displayCard} 
                    completeDeck={completeDeck}
                    player4Turn={player4Turn} 
                    player4Skip={player4Skip} 
                    player4HandleReverse={player4HandleReverse}
                    player4HandState={player4HandState}
                    player4Add2={player4Add2} 
                    draw4WildPlayer4={draw4WildPlayer4}/>
                    
            </div> 
            <br></br>
            <div>
                {/* <button onClick={addsCardToHand}>Draw Card</button> */}
                <button onClick={ addsCardToHand}> Draw Card</button>
            </div>
            <div> 
                <h6> Played Cards</h6>
                
            </div>


            </Container>
    )
}
export default ActiveGame