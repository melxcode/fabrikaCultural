import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  TextField,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import FileCopyIcon from "@material-ui/icons/FileCopy";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
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
    backgroundColor: "#0dc662",
  },
  label: {
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "bold",
  },
}));

const ShareLinkModal = ({ openModal, setOpenModal, propertyId }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [openNotification, setOpenNotification] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  const copyText = () => {
    var copyText = document.getElementById("link");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setOpenNotification(true);

    setTimeout(() => {
      setOpenModal();
    }, 3000);
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
          <InputLabel className={classes.label}>
            Copia el link de la propiedad !{" "}
          </InputLabel>
          <TextField
            label="Link de la propiedad"
            fullWidth
            variant="outlined"
            value={`${window.location.href}/${propertyId}`}
            id="link"
            InputProps={
              window.location.href && {
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <IconButton
                      onClick={() => {
                        copyText();
                      }}
                    >
                      <FileCopyIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }
            }
          />

          <Snackbar
            open={openNotification}
            autoHideDuration={3000}
            style={{ position: "absolute", top: "150px" }}
            onClose={handleCloseNotification}
          >
            <SnackbarContent
              message={"Link copiado , compartilo donde quieras !"}
              className={classes.Snackbar}
            />
          </Snackbar>
        </div>
      </Modal>
    </div>
  );
};

export default ShareLinkModal;
