import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { cardModel } from "../../../../Models/cardModel";
import { userModel } from "../../../../Models/userModel";
import { cardFunctions } from "../../../../Services/cards";
import { userFunctions } from "../../../../Services/user";
import UserCard from "./UserCard/UserCard";
import "./UserDashboard.css";

function UserDashboard(  ): JSX.Element {
    const [fullUser, setUser] = useState<userModel>()
    const [cards, setCards] = useState<cardModel[] | undefined>(undefined)
    const userRedux = useSelector((state: any) => state.auth)
    const [deleteBtn, setDeleteBtn] = useState<boolean>(false)
    const navigate = useNavigate();
    
    useEffect(() => {
        if(userRedux){
            userFunctions.getUserById(userRedux.sub).then((res) => {
                setUser(res)
            });
        }

        cardFunctions.getCardByUserid().then(cards => {
            if(cards?.length === 0){
                setCards(undefined)
            } else {
                setCards(cards)
            }
        })
    
    }, [deleteBtn,userRedux ])


    return (
        <div className="UserDashboard">
                <div className="welcome-dashboard">{fullUser? <h1> Welcome {fullUser.firstName}</h1> :<></>}</div>
            <div className="dashboard-all-cards">
                {cards? cards.map(card => ( <UserCard key={card.id} cardId={card.id} setDeleteBtn={(btn: boolean) => setDeleteBtn(btn)} deleteBtn={deleteBtn} />))
                 : 
                <div className="nocards-userDashboard">
                    <p> No cards yet </p>
                    {/* <Link to="/createcardsteps">Create Now</Link> */}
                    <button onClick={() => navigate("/createcardsteps")} className="button-to-link-createcard" role="button">Create Now</button>

                </div>
                }
                
            
            </div>


        </div>
    );
}

export default UserDashboard;
