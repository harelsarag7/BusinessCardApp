import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cardModel } from "../../../../../Models/cardModel";
import { cardFunctions } from "../../../../../Services/cards";
import CardTemplate1 from "../../CreateCard/CardTemplate/CardTemplate1/CardTemplate1";
import CardTemplate2 from "../../CreateCard/CardTemplate/CardTemplate2/CardTemplate2";
import "./UserCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import { Sheet, ModalClose } from "@mui/joy";
import {Modal, ModalDialog, Stack, Typography} from "@mui/joy"
import React from "react";


import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import EditCard from "./EdirCard/EditCard";
import CardTemplate3 from "../../CreateCard/CardTemplate/CardTemplate3/CardTemplate3";


type CardComponentType = ({ card }: { card: cardModel},) => JSX.Element;

const Components: Record<number, CardComponentType> = {
    1: CardTemplate1,
    2: CardTemplate2,
    3: CardTemplate3
}

// function UserCard(cardId: any, {deleteBtn, setDeleteBtn}: {deleteBtn: boolean, setDeleteBtn: (a: boolean) => void} ): JSX.Element {
function UserCard(props: {cardId: any, deleteBtn: boolean, setDeleteBtn: (e: boolean) => void}): JSX.Element {
    const {cardId, deleteBtn, setDeleteBtn} = props;
    const idNum: number = cardId;

    const [card, setCard] = useState<cardModel | undefined>(undefined)
    const [refresh, setRefresh] = useState<boolean>(false)
    const [copied, setCopied] = useState<boolean>(false)

    const [open, setOpen] = useState(false);


    const Component = Components[card?.templateNum ?? 1];
    const navigate = useNavigate()
        
    useEffect(() => {
        
        cardFunctions.getCard(idNum).then(card => {
            setCard(card);
                console.log(card);
         });
     }, [refresh])


     function navigateToCard() {
        navigate(`/card/`+ card?.id);

     }


     function deleteCard() {
         setDeleteBtn(!deleteBtn)
         console.log(card?.id);
         cardFunctions.deleteCard(card?.id);
     }

     function copyFunction(){
         setCopied(true)
         navigator.clipboard.writeText(`http://localhost:3000/card/${card?.id}`)

        setTimeout(() => {
             setCopied(false)
         }, 3000);
     } 


    return (
        <div className="UserCard">
            <div className="user-card-clickable" onClick={navigateToCard}>
                <div className="user-card-container">
                    <Component key={card?.id} card={card ?? {}}/>
                </div>
            </div>
            <div className="card-dashboard-buttons">
                {/* <Button onClick={navigateToCard} className="edit-or-share-user-card" variant="outlined" color="primary"> <EditIcon/>  <p> Edit</p></Button> */}
                {/* <EditCard card={card? card : {}} /> */}
                {card && <EditCard card={card} refresh={refresh} setRefresh={setRefresh} />}
                <Button onClick={() => setOpen(true)}   className="share-user-card" variant="outlined" color="success"> <ShareIcon/> <p> Share </p></Button>
                <Button onClick={() => deleteCard()} className="delete-user-card" variant="outlined" color="warning"> <DeleteIcon/> <p> Delete </p></Button>



                <React.Fragment>

                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                    >
                    <ModalClose
                        variant="outlined"
                        sx={{
                        top: 'calc(-1/4 * var(--IconButton-size))',
                        right: 'calc(-1/4 * var(--IconButton-size))',
                        boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                        borderRadius: '50%',
                        bgcolor: 'background.body',
                        }}
                    />
                    <div className="modal-container">

                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Share
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        {/* {card?.facebook?  */}
                        <div className="copy-button-and-text">
                            <button className="copy-button" onClick={() => copyFunction()}>Copy link</button>
                            {copied? <span className="copied-span">Copied to Clipboard</span> : <></>}
                        </div>
                        <div className="share-icons-container">

                        <div className="share-icons">

                            <FacebookShareButton
                            //  navigator.clipboard.writeText
                            // url={card.facebook.toString()}
                            url={`http://localhost:3000/card/${card?.id}`}
                            quote={'Dummy text!'}
                            hashtag="#muo"
                            
                            >
                              <FacebookIcon size={45} round />
                            </FacebookShareButton>
                        </div>
                            {/* : <></>} */}
                        <div className="share-icons">

                            <WhatsappShareButton
                            url={`http://localhost:3000/card/${card?.id}`}
                            // quote={'Dummy text!'}
                            // hashtag="#muo"
                            >
                              <WhatsappIcon size={45} round />
                            </WhatsappShareButton>
                        </div>
                                </div>
                    </Typography>
                                </div>
                    </Sheet>
                    </Modal>
              </React.Fragment>
            </div>

        </div>
    );
}

export default UserCard;
