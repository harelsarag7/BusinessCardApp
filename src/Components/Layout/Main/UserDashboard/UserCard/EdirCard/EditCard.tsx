import "./EditCard.css";
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import { TextField, Button } from "@mui/material";
import {Modal, ModalDialog, Stack, Typography} from "@mui/joy"
import { useForm } from "react-hook-form";
import { cardModel } from "../../../../../../Models/cardModel";
import { cardFunctions } from "../../../../../../Services/cards";

export default function EditCard({card,refresh, setRefresh}: {card: cardModel, refresh : any, setRefresh: any}) {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit } = useForm< cardModel >();
//   const [wrong, setWrong] = useState<string>("") 


function EditCardFunction( EditedCard : cardModel) {
    let id = Number(card.id);
    console.log(card.id);
    console.log(EditCard);
    
    try {
      cardFunctions.updateCard(EditedCard, id).then((res) => {
            console.log(res);
            setOpen(false)
            setRefresh(!refresh)
        })
    } catch(e) {
        console.log(e);
    }
}


  return (
    <React.Fragment>
        <Button className="edit-or-share-user-card" variant="outlined" color="primary"  onClick={() => {
        setOpen(true)
        // setWrong("")
        }} > <EditIcon/>  <p> Edit</p></Button>


      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          id=""
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            maxHeight: '60vh',
            overflowY: 'scroll',
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            Edit Box
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Edit your card details.
          </Typography>

          <form onSubmit={ handleSubmit(EditCardFunction)}>
            <Stack spacing={2}>
              <TextField  defaultValue={card.businessName} label="businessName" autoFocus {...register("businessName")}/>
              <TextField  defaultValue={card.businessDescription} label="businessDescription"  {...register("businessDescription")} />
              <TextField  defaultValue={card.email} label="email"  {...register("email")} />
              <TextField  defaultValue={card.phone} label="phone"  {...register("phone")} />
              <TextField  defaultValue={card.location} label="location"  {...register("location")} />
              <TextField  defaultValue={card.instagram} label="instagram"  {...register("instagram")} />
              <TextField  defaultValue={card.twitter} label="twitter"  {...register("twitter")} />
              <TextField  defaultValue={card.github} label="github"  {...register("github")} />
              <TextField  defaultValue={card.website} label="website"  {...register("website")} />
              <TextField  defaultValue={card.facebook} label="facebook"  {...register("facebook")} />
              {/* <TextField label="upload" type="password" required {...register("upload")} /> */}
              <Button type="submit" variant="contained">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}