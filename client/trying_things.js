
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