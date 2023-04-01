import { cardModel } from "../../../../../../Models/cardModel";
import "./CardTemplate1.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiFillHome, AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";


function CardTemplate1( { card }: { card: cardModel}): JSX.Element {

  const [iconColor, setIconColor] = useState();
    const mailTo = "mailto:" + card?.email;
    const phoneTo = "tel:" + card?.phone;
    return (
        <div className="CardTemplate1">
			       {/* {card? 
            <div className="business-card">
                        <div className="logo">
                        </div>
                        <div className="info">
                            <h1 className="name">{card.businessName}</h1>
                            <p className="description">{card.businessDescription}</p>
                        </div>
                        <div className="contact-info">
                            <div className="contact-item">
                                <a href={mailTo}>
                                    <svg className="icon icon-email"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="45" zoomAndPan="magnify" viewBox="0 0 375 374.9999" height="200" version="1.0" transform="rotate(0)"><defs><path id="pathAttribute" d="M 11.972656 11.972656 L 359.222656 11.972656 L 359.222656 359.222656 L 11.972656 359.222656 Z M 11.972656 11.972656 "  strokeWidth="4.2" ></path></defs><g><path id="pathAttribute" d="M 185.597656 359.222656 C 89.675781 359.222656 11.972656 280.984375 11.972656 185.597656 C 11.972656 90.210938 89.675781 11.972656 185.597656 11.972656 C 281.519531 11.972656 359.222656 89.675781 359.222656 185.597656 C 359.222656 281.519531 280.984375 359.222656 185.597656 359.222656 Z M 185.597656 22.691406 C 95.570312 22.691406 22.691406 95.570312 22.691406 185.597656 C 22.691406 275.625 95.570312 348.503906 185.597656 348.503906 C 275.625 348.503906 348.503906 275.625 348.503906 185.597656 C 348.503906 95.570312 275.089844 22.691406 185.597656 22.691406 Z M 185.597656 22.691406 "  strokeWidth="4.2" ></path></g><g id="inner-icon" transform="translate(85, 75)"> <svg xmlns="http://www.w3.org/2000/svg" width="207" height="207"  className="bi bi-envelope" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" id="mainIconPathAttribute" ></path> </svg> </g></svg>
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href={phoneTo}>
                              
                                    <img width={40} src="https://assets.stickpng.com/images/5a452601546ddca7e1fcbc87.png" alt="" />
                                </a>
                            </div>
                            <div className="contact-item">
                        
                            <a href="https://wa.me/1234567890">
                                <svg className="icon icon-whatsapp" xmlns="http://www.w3.org/2000/svg" width="40"   viewBox="0 0 16 16" id="IconChangeColor"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" id="mainIconPathAttribute"></path> </svg>
                            </a>
                            </div>
                            <div className="contact-item">
                            <svg className="icon icon-facebook" width="24" height="24" viewBox="0 0 10004 10004">
                            </svg>
                            <a href="https://www.facebook.com/yourpage">
                                <img width={40} src="https://freeiconshop.com/wp-content/uploads/edd/facebook-outline.png" alt="" />
                                </a>
                            </div>
                        </div>
            </div>
            : <></>} */}

<div className="card">
      <div className="photo">
      {/* <div className="profile-card__img"> */}
                    <img src={card.upload?? "https://www.brooklinspringfair.com/wp-content/uploads/2017/03/your-logo-here-318x300.png" } />
    {/* </div> */}
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
            <a href="mailto:example@mail.com"></a>
            <span>Mail</span>
          </div>
        : <></>}

        {card.phone ? 
          <div className="contact">
            <FaPhoneAlt color={card.iconsColor} />
            <a href="tel:1234567890"></a>
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
          <div className="website contact">
            <AiFillHome color={card.iconsColor} />
            <span>Website</span>
          </div>
        : <></>}

        {card.instagram ? 
          <div className="instagram contact">
            <BsInstagram color={card.iconsColor} />
            <span>instagram</span>
          </div>
        : <></>}

        {card.github ? 
          <div className="github contact">
            <AiFillGithub color={card.iconsColor} />
            <span>Github</span>
          </div>
        : <></>}

        {card.twitter ? 
          <div className="github contact">
            <AiFillTwitterCircle color={card.iconsColor} />
            <span>Twitter</span>
          </div>
        : <></>}

        </div>
      </div>
    </div>

        </div>
        // </div>
    );
}

export default CardTemplate1;
