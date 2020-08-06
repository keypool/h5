import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
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

export default ({no, children}: any) => {
  const classes = useStyles();
  console.log(no);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {children}
      </div>
    </div>
  );
};
