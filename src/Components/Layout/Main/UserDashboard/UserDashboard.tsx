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
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if(userRedux){
            userFunctions.getUserById(userRedux.sub).then((res) => {
                setUser(res)
                setLoading(false)
            });
        }
        
        cardFunctions.getCardByUserid().then(cards => {
            if(cards?.length === 0){
                setCards(undefined)
                setLoading(false)
            } else {
                setCards(cards)
                setLoading(false)
            }
        })
    
    }, [deleteBtn,userRedux ])


    return (
        <div className="UserDashboard">
        {loading ? (
            <div className="loading">

          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
            </div>
        ) : (
          <div>
            <div className="welcome-dashboard">
              {fullUser ? <h1> Welcome {fullUser.firstName}</h1> : <></>}
            </div>
            <div className="dashboard-all-cards">
              {cards ? (
                cards.map((card) => (
                  <UserCard
                    key={card.id}
                    cardId={card.id}
                    setDeleteBtn={(btn: boolean) => setDeleteBtn(btn)}
                    deleteBtn={deleteBtn}
                  />
                ))
              ) : (
                <div className="nocards-userDashboard">
                  <p> No cards yet </p>
                  <button
                    onClick={() => navigate("/createcardsteps")}
                    className="button-to-link-createcard"
                    role="button"
                  >
                    Create Now
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
}

export default UserDashboard;
