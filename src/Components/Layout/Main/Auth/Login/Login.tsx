import "./Login.css";
import * as React from 'react';
import { TextField, Button } from "@mui/material";
import {Modal, ModalDialog, Stack, Typography} from "@mui/joy"
import { userModel } from "../../../../../Models/userModel";
import { authFunctions } from "../../../../../Services/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../../../App/authSlice";
import { useForm } from "react-hook-form";

export default function BasicModalDialog() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { register,reset, handleSubmit } = useForm< userModel | any >();
  const [wrong, setWrong] = useState<string>("") 
  const dispatch = useDispatch();


   function loginFunction( { username, password }: userModel){

       authFunctions.login( username, password ).then( (res: any) => {

        if(res === "") {
          setWrong("Wrong Username or Password")
          return 
        }
        dispatch(login(res));
          // navigate(`/user/`+ username);
          setOpen(false);
      })
  }

  return (
    <React.Fragment>
      <button className="login-btn-header" onClick={() => {
        setOpen(true)
        setWrong("")
        }} >Login</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          id="login-modal"
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
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
            Login Box
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Fill your details to connect.
          </Typography>

          <form onSubmit={ handleSubmit(loginFunction)}>
            <Stack spacing={2}>
              <TextField label="Username" autoFocus required {...register("username")}/>
              <TextField label="Password" type="password" required {...register("password")} />
              <Button type="submit" variant="contained">Submit</Button>
            </Stack>
            <Typography
            id="wrong-password-username"
            mt={0.5}
            mb={2}
          >
            {wrong}
          </Typography>


          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}