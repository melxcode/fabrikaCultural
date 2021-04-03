import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginLeft: "5px",
    marginRight: "10px",
    fontSize: "13px",
  },
  title: {
    color: "#97ADBA",
    marginLeft: "5px",
  },
}));
const InfoIcon = ({ label, icon, isTitle }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {icon}
      <Typography className={!isTitle ? classes.label : classes.title}>
        {label}
      </Typography>
    </Box>
  );
};

export default InfoIcon;
