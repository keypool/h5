import React from 'react';
import Swiper from './swiper';
import {makeStyles} from "@material-ui/core/styles";
import WebglInteractivePoints from '@/components/three/webgl-interactive-points';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    color: theme.palette.common.white,
  },
  bg: {
    width: '100%',
    height: '100%',
    position: "absolute"
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bg}>
        <WebglInteractivePoints/>
      </div>
      <Swiper />
    </div>
  )
}