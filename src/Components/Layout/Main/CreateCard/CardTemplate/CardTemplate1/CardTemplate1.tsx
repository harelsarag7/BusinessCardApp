import { cardModel } from "../../../../../../Models/cardModel";
import "./CardTemplate1.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiFillHome, AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";


function CardTemplate1( { card }: { card: cardModel}): JSX.Element {
  const phoneTo = "tel:" + card?.phone;
  const emailTo = "mailto:" + card?.email;

    return (
        <div className="CardTemplate1">
<div className="card">
      <div className="photo">
                    <img src={card.upload?? "https://www.brooklinspringfair.com/wp-content/uploads/2017/03/your-logo-here-318x300.png" } />
      </div>
      <div className="details">
        <h2>{card.businessName}</h2>
        <p>{card.businessDescription}</p>
          {card.location ? 
            <div className="location">   
                <FaMapMarkerAlt color={card.iconsColor} />
                <span className="profile-card-loc__txt"> {card.location} </span>
            </div>
        : <></>}

        
        <div className="icons">

        {card.email ? 
          <div className="contact">
            <FaEnvelope color={card.iconsColor} />
            <a href={emailTo}></a>
            <span>Mail</span>
          </div>
        : <></>}

        {card.phone ? 
          <div className="contact">
            <FaPhoneAlt color={card.iconsColor} />
            <a href={phoneTo}></a>
            <span>Phone</span>
          </div>
        : <></>}

        {card.facebook ? 
          <a href={card.facebook.includes("http") ? card.facebook : "https://" + card.facebook} target="_blank">
            <div className="facebook contact">
              <BsFacebook color={card.iconsColor} />
              <span>Facebook</span>
            </div>
          </a>
        : <></>}

        {card.website ? 
          <a href={card.website.includes("http") ? card.website : "https://" + card.website} target="_blank">
            <div className="website contact">
              <AiFillHome color={card.iconsColor} />
              <span>Website</span>
            </div>
          </a>
        : <></>}

        {card.instagram ? 
          <a href={card.instagram.includes("http") ? card.instagram : "https://" + card.instagram} target="_blank">
            <div className="instagram contact">
              <BsInstagram color={card.iconsColor} />
              <span>instagram</span>
            </div>
          </a>
        : <></> }

        {card.github ? 
          <a href={card.github.includes("http") ? card.github : "https://" + card.github} target="_blank">
            <div className="github contact">
              <AiFillGithub color={card.iconsColor} />
              <span>Github</span>
            </div>
          </a>
        : <></>}

        {card.twitter ? 
          <a href={card.twitter.includes("http") ? card.twitter : "https://" + card.twitter} target="_blank">
            <div className="github contact">
              <AiFillTwitterCircle color={card.iconsColor} />
              <span>Twitter</span>
            </div>
          </a>
        : <></>}

        </div>
      </div>
    </div>

        </div>
    );
}

export default CardTemplate1;
