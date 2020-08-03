import React from 'react';
import Swiper from './swiper';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden'
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Swiper />
    </div>
  )
}