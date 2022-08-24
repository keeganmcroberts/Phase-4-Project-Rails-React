import Card_back from '../public/card.images/cards/Back_of_Card'

function Card(){
    

    const [testcard, setTestCard] = useState({"emblem": "druid", "number": "5" })

    const [openCard, setOpenCard] = useState(false)

    function testCardStatetoDetermineOpenCardState(){
        // testcard ? setOpenCard(true) : null 
        {openCard ? <img src={Card_back} alt="open-card"/> : <img src="" alt="closed"/>}
    }

    return(
        <>

         {opencard ? <img src={Card_back} alt="open-card"/> : <img src="" alt="closed"/>}
        
        </>
    )
}
export default Card;