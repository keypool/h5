import React from 'react';
import Swiper from './swiper';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden',
    position: 'fixed',
    width: '100%',
    height: '100%',
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