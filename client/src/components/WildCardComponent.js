import styled from "styled-components"

const Container =styled.div`
color: 181D2B

    .green_button{
        background-color: #3BE43B
    }
    .red_button{
        background-color: #F00B1C
    }
    .blue_button{
        background-color: #627FFF
    }
    .pink_button{
        background-color: #D659E5
    }

`

function WildCardPopUp({displayWildCard, playedCardsState}){
    
    function resetWildCardPopUp(){
        displayWildCard(false)
    }

    const GreenCard = {"emblem": "thief_0", "value": "0"} 
    const RedCard =  {"emblem": "illusionist_0", "value": "0"}
    const BlueCard = { "emblem": "bard_0", "value": "0"}
    const PinkCard = { "emblem": "druid_0", "value": "0"}
    
    
    function setPlayedCardGreen(){
        playedCardsState.unshift(GreenCard)

    }
    function setPlayedCardStateRed(){
        playedCardsState.unshift(RedCard)
    }

    function setPlayedCardStateBlue(){
        playedCardsState.unshift(BlueCard)
    }
    function setPlayedCardStatePink(){
        playedCardsState.unshift(PinkCard)

    }
    
    return (
        <Container>
                <h4> Choose the Next Color: </h4>
                <button className="green_button" onClick={()=> {resetWildCardPopUp(); setPlayedCardGreen()} }> GREEN </button>
                <button className="red_button" onClick={()=> {resetWildCardPopUp(); setPlayedCardStateRed() } }> RED </button> 
                <button className="blue_button" onClick={()=> {resetWildCardPopUp(); setPlayedCardStateBlue() } }> BLUE </button> 
                <button className="pink_button" onClick={()=> {resetWildCardPopUp(); setPlayedCardStatePink() } }> PINK </button>   
        </Container>
    )
}
export default WildCardPopUp;