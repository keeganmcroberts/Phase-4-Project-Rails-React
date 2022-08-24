
import Card_back from '../public/card.images/cards/Back_of_Card'
// For the Card Images
/* 
    - either have a db json from which you fetch and then it will be
        cards.green_0_front
        or cards.back
    - or have to import each of the individual images from a folder
        and call them one by one as image components 
*/
const [cardOpen, setCardOpen] = useState(false)
/* hard coding open and clsed because cards for other players 
    will always be false, and you cards, and cards played will
    always be open 
    each player will see their cards as my cards withthe login
*/
function settingCardSide(){
    setCardOpen(true)
}

function OpenOrClosed(){
    cardOpen ? <img src={Card_back}/> : AppearanceOfCards()
}

function AppearanceOfCards(){
    if (cardToPlay.emblem === "thief_0")
        return <img src={Green_0} />
    else if( cardToPlay.emblem === "thief_1")
        return <img src={Green_1}/>
    else if( cardToPlay.emblem === "thief_2")
        return <img src={Green_2} />
    else if( cardToPlay.emblem === "thief_3")
        return <img src={Green_3}/>
    else if( cardToPlay.emblem === "thief_4")
        return <img src={Green_4} />
    else if( cardToPlay.emblem === "thief_5")
        return <img src={Green_5}/>
    else if( cardToPlay.emblem === "thief_6")
        return <img src={Green_6} />
    else if( cardToPlay.emblem === "thief_7")
        return <img src={Green_7}/>
    else if( cardToPlay.emblem === "thief_8")
        return <img src={Green_8} />
    else if( cardToPlay.emblem === "thief_9")
        return <img src={Green_9}/>
    else if( cardToPlay.emblem === "thief_10")
        return <img src={Green_10} />
    else if( cardToPlay.emblem === "thief_11")
        return <img src={Green_11}/>
    else if( cardToPlay.emblem === "thief_12")
        return <img src={Green_12} />
    else if (cardToPlay.emblem === "thief_skip")
        return <img src={Green_skip} />
    else if (cardToPlay.emblem === "thief_reverse")
        return <img src={Green_reverse}/>
    else if (cardToPlay.emblem === "thief_add_2")
        return <img src={Green_add2} />
    else if (cardToPlay.emblem === "wild")
        return <img src={Wild} />
    else if (cardToPlay.emblem === "draw 4")
        return <img src={Wild_draw4} />
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