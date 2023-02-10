import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PADDLE from "../../assets/images/paddle.png";

const useStyles = makeStyles({
  paddle: {
    width: "150px",
    height: "20px",
    position: "absolute",
    left: '50%',
    top: '90%',
  },
});

const Paddle = () => {
  const { paddle } = useStyles();

  return <img src={PADDLE} className={paddle} id="paddle" />;
};

export default Paddle;
