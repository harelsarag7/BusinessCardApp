import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cardModel } from "../../../../../Models/cardModel";
import { cardFunctions } from "../../../../../Services/cards";
import "./CardTemplate.css";
import CardTemplate1 from "./CardTemplate1/CardTemplate1";
import CardTemplate2 from "./CardTemplate2/CardTemplate2";
import CardTemplate3 from "./CardTemplate3/CardTemplate3";

type CardComponentType = ({ card }: { card: cardModel}) => JSX.Element;

const Components: Record<number, CardComponentType> = {
    1: CardTemplate1,
    2: CardTemplate2,
    3: CardTemplate3
}

function CardTemplate(): JSX.Element {
    let id = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState<cardModel | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(true);

    const CardClass = "CardTemplate" + card?.templateNum;
    const Component = Components[card?.templateNum ?? 1];
    
    useEffect(() => {
        setLoading(true)
        const idNum: any= id.id
        cardFunctions.getCard(idNum).then(res => {
            console.log(res);
            if(!res){
                navigate("/404")
            }
            setCard(res);
            setLoading(false);
            
        });
    }, [])

    return (
        <div className={`cardTemplate ${CardClass}`}>
            {/* {card?.template == 1? <CardTemplate1 key={card.id} card={card}/>
             : card?.template === 2? " WRONG Card template is 2"
              : "No template"} */}

              {loading? 
              <div className="loading Card">
                <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </div>
              </div>
              : 
              <Component key={card?.id} card={card ?? {}}/>
            }

        </div>
    );
}

export default CardTemplate;
