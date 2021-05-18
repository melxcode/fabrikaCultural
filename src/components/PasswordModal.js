import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField, InputLabel, Button } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  Snackbar: {
    backgroundColor: "#F70232",
  },
  label: {
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "bold",
  },
}));

const ShareLinkModal = ({ openModal, setOpenModal, userPassword }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [openNotification, setOpenNotification] = useState(false);
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setOpenModal(true);
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  const handleLogin = () => {
    const success = password === userPassword;
    if (success) {
      localStorage.setItem("id", password);
      setOpenModal(false);
    } else {
      setOpenNotification(true);
      setPassword("");
    }
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <InputLabel className={classes.label}>Ingresar Contraseña</InputLabel>
          <TextField
            label="Contraseña"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            variant="outlined"
            placeholder="Ingresar la Contraseña"
          />
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              handleLogin();
            }}
            style={{
              marginTop: "20px",
            }}
          >
            INGRESAR
          </Button>
          <Snackbar
            open={openNotification}
            autoHideDuration={3000}
            style={{ position: "absolute", top: "200px" }}
            onClose={handleCloseNotification}
          >
            <SnackbarContent
              message={"Contraseña equivocada"}
              className={classes.Snackbar}
            />
          </Snackbar>
        </div>
      </Modal>
    </div>
  );
};

export default ShareLinkModal;
