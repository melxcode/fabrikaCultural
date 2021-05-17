import React, { useRef, useState } from "react";
import { Box, Typography, CircularProgress } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { uploadPhoto } from "../firebase";

const PhotoContainer = ({ values, classes, setFieldValue }) => {
  const [loading, setLoading] = useState(false);
  const currentPhoto = useRef(null);
  const handleAttachCurrent = () => {
    currentPhoto.current.click();
  };

  return (
    <Box className={classes.photoContainer}>
      {values.archivos.map((photo) => (
        <Box className={classes.newPhotoBoxImg}>
          <img src={photo} alt="house" height="159" width="159" />
        </Box>
      ))}

      <Box
        className={classes.newPhotoBox}
        style={{ cursor: "pointer" }}
        onClick={handleAttachCurrent}
      >
        <input
          style={{ display: "none" }}
          ref={currentPhoto}
          type="file"
          onChange={async (e) => {
            setLoading(true);
            const photoUrl = await uploadPhoto(e.target.files[0]);

            setFieldValue("archivos", [...values.archivos, photoUrl]);
            setLoading(false);
          }}
        />
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography>Subir fotos</Typography>
            <AddPhotoAlternateIcon fontSize="large" />
          </>
        )}
      </Box>
    </Box>
  );
};

export default PhotoContainer;
