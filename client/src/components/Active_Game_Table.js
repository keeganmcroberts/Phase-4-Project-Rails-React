import styled from "styled-components";
import { useEffect, useState} from "react";

import My_Hand from "./My_Hand";
import Other_Player2 from './other_players_hands/Other_Player2'
import Other_Player3 from './other_players_hands/Other_Player3'
import Other_Player4 from './other_players_hands/Other_Player4'
import PlayedCardPile from './PlayedCardPile' 
import WildCardPopUp from './WildCardComponent'



const Container = styled.div`

`


function ActiveGame(){

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
    const [displayWildCard, setDisplayWildCard] = useState(false)
    

    useEffect( ()=>{
        fetch("http://localhost:3000/cards")
        .then(res => res.json())
        .then(data => {setCompleteDeck(data)
                        setDrawingDeckState(data)    
        })
    }, [])

   console.log("complete deck:", completeDeck)

   function startingTheGame(){
             setGameInProgress(true)
             const newCard = getARandomCard(drawingDeckState)
             const deckToDrawFrom = drawingDeckState.indexOf(newCard)
             console.log("decktoDrawFrom:", deckToDrawFrom)
             drawingDeckState.splice(deckToDrawFrom, 1)
             setPlayedCards([newCard])
            
    }

    console.log("gameinSession:", gameInProgress)


    function getARandomCard(arrayOfCards){
        const randomIndex = Math.floor(Math.random()* arrayOfCards.length)
        const randomCard = arrayOfCards[randomIndex]
        return randomCard
    }

    function firstPlayedCard(arrayOfCards){
        const randomIndex = Math.floor(Math.random()* arrayOfCards.length)
        const randomCard = arrayOfCards[randomIndex]
        setPlayedCards( randomCard )
    }


        function whenDrawingDeckisZero(){
            if (drawingDeckState < 80)
            setDrawingDeckState([completeDeck])
        }


        function player1WildCard(eachCard){
            setDisplayWildCard(true)
            const cardToDelete = myHandState.find(cardToDelete=>{
                return eachCard.emblem === cardToDelete.emblem 
            })
             const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
                myHandState.splice(deleteSpecificIndex, 1)
                playedCards.unshift(cardToDelete)
           
           if ("player_1" === playerTurn && clockWise === true)
                return setPlayerTurn("player_2") 
            else if ("player_1" === playerTurn && clockWise === false)
                return setPlayerTurn("player_4")
            
        }
        
        function player2WildCard(eachCard){
            setDisplayWildCard(true)
            const cardToDelete = player2HandState.find(cardToDelete=>{
                return eachCard.emblem === cardToDelete.emblem 
            })
             const deleteSpecificIndex = player2HandState.indexOf(cardToDelete)
                player2HandState.splice(deleteSpecificIndex, 1)
                playedCards.unshift(cardToDelete)
           
           if ("player_2" === playerTurn && clockWise === true)
                return setPlayerTurn("player_3") 
            else if ("player_2" === playerTurn && clockWise === false)
                return setPlayerTurn("player_1")
            
        }

        function player3WildCard(eachCard){
            setDisplayWildCard(true)
            const cardToDelete = player3HandState.find(cardToDelete=>{
                return eachCard.emblem === cardToDelete.emblem 
            })
             const deleteSpecificIndex = player3HandState.indexOf(cardToDelete)
                player3HandState.splice(deleteSpecificIndex, 1)
                playedCards.unshift(cardToDelete)
           
           if ("player_3" === playerTurn && clockWise === true)
                return setPlayerTurn("player_4") 
            else if ("player_3" === playerTurn && clockWise === false)
                return setPlayerTurn("player_2")
            
        }

        function player4WildCard(eachCard){
            setDisplayWildCard(true)
            const cardToDelete = player4HandState.find(cardToDelete=>{
                return eachCard.emblem === cardToDelete.emblem 
            })
             const deleteSpecificIndex = player2HandState.indexOf(cardToDelete)
                player4HandState.splice(deleteSpecificIndex, 1)
                playedCards.unshift(cardToDelete)
           
           if ("player_4" === playerTurn && clockWise === true)
                return setPlayerTurn("player_1") 
            else if ("player_4" === playerTurn && clockWise === false)
                return setPlayerTurn("player_3")
            
        }




    
    function draw4WildPlayer1(card){
        setDisplayWildCard(true)
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
        setDisplayWildCard(true)
        const Card1=getARandomCard(drawingDeckState)
        const Card2=getARandomCard(drawingDeckState)
        const Card3=getARandomCard(drawingDeckState)
        const Card4=getARandomCard(drawingDeckState)
         
        // puttingDownCardsP4(card) 
        //     if (puttingDownCardsP4)
        const cardToDelete = player2HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = player2HandState.indexOf(cardToDelete)
            player2HandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete) 
            // setPlayedCards([cardToDelete, ...playedCards]) 
        
         if ("player_2" === playerTurn && clockWise === true)
           
            return setPlayer3HandState([Card1, Card2, Card3, Card4, ...player3HandState])
        if ("player_2" === playerTurn && clockWise === false)
          
            return setMyHandState ([Card1, Card2, Card3, Card4, ...myHandState])
    }

    function draw4WildPlayer3(card){
        setDisplayWildCard(true)
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
        setDisplayWildCard(true)
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
   

    function startingHands(){
        setMyHandState(StartingSevenCards)
        setPlayer2HandState(StartingSevenCards)
        setPlayer3HandState(StartingSevenCards)
        setPlayer4HandState(StartingSevenCards)

        setDisplayCard(true)  
    }

    

   


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
    console.log("NewHand For Player2", player2HandState)
    console.log("New Hand For Player 3:", player3HandState)
    
    console.log("New Hand For Player 4:", player4HandState)

    console.log("The drawing Deck:", drawingDeckState)
    

   
//     TO Determine Player Turn 
    console.log("PLAYER TURN:", playerTurn)
    console.log("played cards pile:", playedCards)
    


    function player1Turn(card){
        const lastCardPlayed = playedCards[0]
        const cardEmblem = lastCardPlayed.emblem.split("_")[0]
        const cardValue = lastCardPlayed.emblem.split("_")[1]

        const newCardEmblem = card.emblem.split("_")[0]
        const newCardValue = card.emblem.split("_")[1]
        if (cardEmblem === newCardEmblem || cardValue === newCardValue){
        
        
        console.log("last card played", lastCardPlayed)
        const cardToDelete = myHandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
            myHandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
            //  the delete and unshift logic needs to go inside of puttingDownCardP1()
            //  if all the conditions of the function are met then it splices and adds to played cards array

        setInitialTurn(false)
        if ("player_1" === playerTurn && clockWise === true)
            return setPlayerTurn("player_2") 
        else if ("player_1" ===playerTurn && clockWise === false)
            return setPlayerTurn("player_4")
        
        } else alert("illegal move")}
    
    
        function player2Turn(card){

            const lastCardPlayed = playedCards[0]
            const cardEmblem = lastCardPlayed.emblem.split("_")[0]
            const cardValue = lastCardPlayed.emblem.split("_")[1]
    
            const newCardEmblem = card.emblem.split("_")[0]
            const newCardValue = card.emblem.split("_")[1]
            if (cardEmblem === newCardEmblem || cardValue === newCardValue){ 

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
        
        } else alert("Illegal move")
    }
    
    function player3Turn(card){

        const lastCardPlayed = playedCards[0]
        const cardEmblem = lastCardPlayed.emblem.split("_")[0]
        const cardValue = lastCardPlayed.emblem.split("_")[1]

        const newCardEmblem = card.emblem.split("_")[0]
        const newCardValue = card.emblem.split("_")[1]
        if (cardEmblem === newCardEmblem || cardValue === newCardValue){
        
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
            
        } else alert("Illegal move")
    }      
    function player4Turn(card){
        const lastCardPlayed = playedCards[0]
            const cardEmblem = lastCardPlayed.emblem.split("_")[0]
            const cardValue = lastCardPlayed.emblem.split("_")[1]
    
            const newCardEmblem = card.emblem.split("_")[0]
            const newCardValue = card.emblem.split("_")[1]
            
            if (cardEmblem === newCardEmblem || cardValue === newCardValue){ 
        
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
            } else alert("illegal move")}

    function player1Add2(card){
        const lastCardPlayed = playedCards[0]
            const cardEmblem = lastCardPlayed.emblem.split("_")[0]
            const cardValue = lastCardPlayed.emblem.split("_")[1]
    
            const newCardEmblem = card.emblem.split("_")[0]
            const newCardValue = card.emblem.split("_")[0]
            if (cardEmblem === newCardEmblem || cardValue === newCardValue){
        const cardToDelete = myHandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
            myHandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
        const card1 = getARandomCard(drawingDeckState)
        const card2 = getARandomCard(drawingDeckState)
        
        if ("player_1" === playerTurn && clockWise === true)
            setPlayerTurn("player_2")
            setPlayer2HandState([card1, card2, ...player2HandState])
        if ("player_1" === playerTurn && clockWise === false)
            setPlayerTurn("player_4")
            return setPlayer4HandState ([card1, card2, ...player4HandState])
    } else alert("Illegal Move")
    } 

    
    function player2Add2(card){
        const lastCardPlayed = playedCards[0]
            const cardEmblem = lastCardPlayed.emblem.split("_")[0]
            const cardValue = lastCardPlayed.emblem.split("_")[1]
    
            const newCardEmblem = card.emblem.split("_")[0]
            const newCardValue = card.emblem.split("_")[0]
            if (cardEmblem === newCardEmblem || cardValue === newCardValue){
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
        } else alert("Illegal Move")
    }
    

    function player3Add2(card){
        const lastCardPlayed = playedCards[0]
            const cardEmblem = lastCardPlayed.emblem.split("_")[0]
            const cardValue = lastCardPlayed.emblem.split("_")[1]
    
            const newCardEmblem = card.emblem.split("_")[0]
            const newCardValue = card.emblem.split("_")[0]
            if (cardEmblem === newCardEmblem || cardValue === newCardValue){
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
        } else alert("Illegal Move")
    }

    function player4Add2(card){
        const lastCardPlayed = playedCards[0]
            const cardEmblem = lastCardPlayed.emblem.split("_")[0]
            const cardValue = lastCardPlayed.emblem.split("_")[1]
    
            const newCardEmblem = card.emblem.split("_")[0]
            const newCardValue = card.emblem.split("_")[0]
            if (cardEmblem === newCardEmblem || cardValue === newCardValue){
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
    
        } else alert("Illegal Move")
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
        const lastCardPlayed = playedCards[0]
        const cardEmblem = lastCardPlayed.emblem.split("_")[0]
        const cardValue = lastCardPlayed.emblem.split("_")[1]

        const newCardEmblem = card.emblem.split("_")[0]
        const newCardValue = card.emblem.split("_")[1]
        if (cardEmblem === newCardEmblem || cardValue === newCardValue){
        
        const cardToDelete = myHandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
        })
         const deleteSpecificIndex = myHandState.indexOf(cardToDelete)
            myHandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
        } else alert("illegal move")}
    
    function player2HandleReverse(card){
        const lastCardPlayed = playedCards[0]
        const cardEmblem = lastCardPlayed.emblem.split("_")[0]
        const cardValue = lastCardPlayed.emblem.split("_")[1]

        const newCardEmblem = card.emblem.split("_")[0]
        const newCardValue = card.emblem.split("_")[1]
        if (cardEmblem === newCardEmblem || cardValue === newCardValue){

        const cardToDelete = player2HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
    })
        const deleteSpecificIndex = player2HandState.indexOf(cardToDelete)
            player2HandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
        }else alert("illegal move")}
    
    function player3HandleReverse(card){
        const lastCardPlayed = playedCards[0]
        const cardEmblem = lastCardPlayed.emblem.split("_")[0]
        const cardValue = lastCardPlayed.emblem.split("_")[1]

        const newCardEmblem = card.emblem.split("_")[0]
        const newCardValue = card.emblem.split("_")[1]
        if (cardEmblem === newCardEmblem || cardValue === newCardValue){
        
        const cardToDelete = player3HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
})
        const deleteSpecificIndex = player3HandState.indexOf(cardToDelete)
            player3HandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
        }else alert("illegal move")}

    function player4HandleReverse(card){
        const lastCardPlayed = playedCards[0]
        const cardEmblem = lastCardPlayed.emblem.split("_")[0]
        const cardValue = lastCardPlayed.emblem.split("_")[1]

        const newCardEmblem = card.emblem.split("_")[0]
        const newCardValue = card.emblem.split("_")[1]
        if (cardEmblem === newCardEmblem || cardValue === newCardValue){
        
        const cardToDelete = player4HandState.find(cardToDelete=>{
            return card.emblem === cardToDelete.emblem 
})
        const deleteSpecificIndex = player4HandState.indexOf(cardToDelete)
            player4HandState.splice(deleteSpecificIndex, 1)
            playedCards.unshift(cardToDelete)
        
        setClockwise(!clockWise)
        setInitialTurn(false)
        }else alert("illegal move")}

        

    function player1Skip(card){
        const lastCardPlayed = playedCards[0]
        const cardEmblem = lastCardPlayed.emblem.split("_")[0]
        const cardValue = lastCardPlayed.emblem.split("_")[1]

        const newCardEmblem = card.emblem.split("_")[0]
        const newCardValue = card.emblem.split("_")[1]
        if (cardEmblem === newCardEmblem || cardValue === newCardValue){
        
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
        }else alert("illegal move")}
    
    function player2Skip(card){
        const lastCardPlayed = playedCards[0]
        const cardEmblem = lastCardPlayed.emblem.split("_")[0]
        const cardValue = lastCardPlayed.emblem.split("_")[1]

        const newCardEmblem = card.emblem.split("_")[0]
        const newCardValue = card.emblem.split("_")[1]
        if (cardEmblem === newCardEmblem || cardValue === newCardValue){
        
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
        }else alert("illegal move")}
    
    function player3Skip(card){
        const lastCardPlayed = playedCards[0]
        const cardEmblem = lastCardPlayed.emblem.split("_")[0]
        const cardValue = lastCardPlayed.emblem.split("_")[1]

        const newCardEmblem = card.emblem.split("_")[0]
        const newCardValue = card.emblem.split("_")[1]
        if (cardEmblem === newCardEmblem || cardValue === newCardValue){
        
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
         }else alert("illegal move") }
  
   function player4Skip(card){
        const lastCardPlayed = playedCards[0]
            const cardEmblem = lastCardPlayed.emblem.split("_")[0]
            const cardValue = lastCardPlayed.emblem.split("_")[1]
    
            const newCardEmblem = card.emblem.split("_")[0]
            const newCardValue = card.emblem.split("_")[0]
            if (cardEmblem === newCardEmblem || cardValue === newCardValue){
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
    } else alert("Illegal Move")
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
                    player1WildCard={player1WildCard}
                    completeDeck={completeDeck}
                    displayCard={displayCard} 
                    player1Turn={player1Turn} 
                    player1Skip={player1Skip} 
                    player1HandleReverse={player1HandleReverse} 
                    myHandState={myHandState}
                    player1Add2={player1Add2}
                    draw4WildPlayer1={draw4WildPlayer1}
                    // puttingDownCardsP1={puttingDownCardsP1}
                    />
                    
        
            </div> 

            <div>
                
                    <Other_Player2 
                    player2WildCard={player2WildCard}
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
                    player3WildCard={player3WildCard}
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
                    player4WildCard={player4WildCard}
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
        
                <button onClick={ addsCardToHand}> Draw Card</button>

            </div>
            <div> 
                <h6> Played Cards</h6>
                    <PlayedCardPile 
                    playedCardsState={playedCards} 
                    displayCard={displayCard} c
                    ompleteDeck={completeDeck}/>
                    {displayWildCard? <WildCardPopUp playedCardsState={playedCards} displayWildCard={setDisplayWildCard}/> : null}
            </div>


            </Container>
    )
}
export default ActiveGame