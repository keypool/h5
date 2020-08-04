import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PATH_PREFIX } from '@/env';
import WebglInteractivePoints from '@/components/three/webgl-interactive-points';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#000000',
    color: theme.palette.common.white,
    width: '100%',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    position: 'absolute',
    display: 'flex',
    color: theme.palette.common.white,
    width: 'calc(100% - 60px)',
    height: 'calc(100% - 80px)',
    textAlign: 'left',
    padding: theme.spacing(5, 0)
  }
}));

export default ({children}: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundImage: `url('${PATH_PREFIX}/static/home/bg.png')`}}>
      <WebglInteractivePoints/>
      <div className={classes.container}>
        {children}
      </div>
    </div>
  );
};
