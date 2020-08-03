import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const useStyles = makeStyles(() => ({
  root: {
    
  },
  icon: {
    transform: 'rotate(270deg)',
    position: 'absolute',
    width: '100%',
    // bottom: 10,
    animation: "$arrow 1.5s ease infinite",
  },
  "@keyframes arrow": {
    "0%": {
      bottom: 0,
      opacity: "0",
    },
    "30%": {
      bottom: 20,
      opacity: "1",
    },
    "100%": {
      bottom: 40,
      opacity: "0",
    }
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DoubleArrowIcon className={classes.icon}/>
    </div>
  );
};
