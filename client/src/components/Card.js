import { useState } from "react"
import backOfCard from '../cards/Back_of_Card.png'
import blueReverse from '../cards/Blue_Reverse.png'
function Card({seeCard, dontSeeCard}){
    

    const [testcard, setTestCard] = useState('emblem: druid, number: 5' )

    /* For  the see card true that is going to be replaced with a constant of some kind
        const Card = () => {
            const currentCard = eachcard
            if (cardToPlay.emblem === "thief_0")
                return <img src={/public/card.images/cards/Green_0.png} />
            else if( cardToPlay.emblem === "thief_1")
                return <img src={/public/card.images/cards/Green_1.png}/>
            else if( cardToPlay.emblem === "thief_2")
                return <img src={/public/card.images/cards/Green_2.png} />
            else if( cardToPlay.emblem === "thief_3")
                return <img src={/public/card.images/cards/Green_3.png}/>
            else if( cardToPlay.emblem === "thief_4")
                return <img src={/public/card.images/cards/Green_4.png} />
            else if( cardToPlay.emblem === "thief_5")
                return <img src={/public/card.images/cards/Green_5.png}/>
            else if( cardToPlay.emblem === "thief_6")
                return <img src={/public/card.images/cards/Green_6.png} />
            else if( cardToPlay.emblem === "thief_7")
                return <img src={/public/card.images/cards/Green_7.png}/>
            else if( cardToPlay.emblem === "thief_8")
                return <img src={/public/card.images/cards/Green_8.png} />
            else if( cardToPlay.emblem === "thief_9")
                return <img src={/public/card.images/cards/Green_9.png}/>
            else if( cardToPlay.emblem === "thief_10")
                return <img src={/public/card.images/cards/Green_1.png0} />
            else if( cardToPlay.emblem === "thief_11")
                return <img src={/public/card.images/cards/Green_1.png1}/>
            else if( cardToPlay.emblem === "thief_12")
                return <img src={/public/card.images/cards/Green_1.png2} />
            else if (cardToPlay.emblem === "thief_skip")
                return <img src={/public/card.images/cards/Green_s.pngkip} />
            else if (cardToPlay.emblem === "thief_reverse")
                return <img src={/public/card.images/cards/Green_r.pngeverse}/>
            else if (cardToPlay.emblem === "thief_add_2")
                return <img src={/public/card.images/cards/Green_a.pngdd2} />
            else if (cardToPlay.emblem === "wild")
                return <img src={Wild} />
            else if (cardToPlay.emblem === "draw 4")
                return <img src={Wild_draw4} />
        }
    */
    return(
        <>
        {seeCard? <img src={backOfCard} 
                    height={100} 
                    width={75} 
                    alt={testcard} />
                    :
                <img src={blueReverse} 
                    height={100} 
                    width={75} 
                    alt="back of card"
                /> 
        } 
        {/* {opencard ? <img src={backOfCard} alt="open-card" height={200} width={150}/> : <img src="" alt="closed" height={200} width={150}/>} */}
        </>
    )
}
export default Card;