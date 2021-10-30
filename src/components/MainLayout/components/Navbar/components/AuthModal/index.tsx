import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import RegisterModal from "./components/RegisterModal";
import LoginModal from "./components/LoginModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AuthModal = () => {
  const [open, setOpen] = React.useState(false);
  const [register, setRegister] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setRegister(false);
  };

  return (
    <div>
      {" "}
      <Button onClick={handleOpen} variant='outlined' color='primary'>
        Войти
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {register ? "Регистрация" : "Войти в аккаунт"}
          </Typography>
          <div>
            {register ? (
              <RegisterModal />
            ) : (
              <LoginModal setRegister={setRegister} />
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
