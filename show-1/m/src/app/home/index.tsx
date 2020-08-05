import React from 'react';
import Swiper from './swiper';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    color: theme.palette.common.white,
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