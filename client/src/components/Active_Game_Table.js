import styled from "styled-components";
import { useState, useEffect} from "react";

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
    */

    /* moving between players  */ 

    const players = ["player_1", "player_2", "player_3", "player_4"]

    const [playerTurn, setPlayerTurn] = useState(players[0]) 
    const [clockWise, setClockwise]= useState(true)
    const [initialTurn, setInitialTurn] = useState(true)
    // const [playerTurn, setPlayerTurn] = useState({gametable.player_1})
    const [displayCard, setDisplayCard] = useState(true)
    function seeingBackofCard(){
       return setFrontOfCard(false)
    }

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
            {/* <h3> Its my turn: {playerTurn} </h3>  */}
            <div >
                {/* <My_Hand seethecards={frontOfCard} 
                        player1Turn={player1Turn} 
                        player1Skip={player1Skip} 
                        player1Reverse={player1Reverse}/>  */}
                <h2> Player 1</h2>
                <button onClick={player1Turn}> Next </button>
                <button onClick={player1Skip}> Skip </button>
                <button onClick={handleReverse}> Reverse </button>
            </div> 

            <div>
                
                    <Other_Player2 
                    completeDeck={completeDeck}
                    dontSeeTheCards={seeingBackofCard} 
                    player2Turn={player2Turn} 
                    player2Skip={player2Skip} 
                    player2Reverse={player2Reverse}/> */}
                <h2> Player 2</h2> 
                    <button onClick={player2Turn}> Next </button>
                    <button onClick={player2Skip}> Skip </button> 
                    <button onClick={handleReverse}> Reverse </button>
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