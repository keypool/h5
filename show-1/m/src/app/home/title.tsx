import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ViewGrow from '@/components/view-grow';

const useStyles = makeStyles((theme) => ({
  text: {
    display: 'inline-block',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: 10,
    marginTop: '-12px'
  },
}));

export default ({text}: any) => {
  const classes = useStyles();

  return (
    <div>
      <ViewGrow>
        <Typography className={classes.text}>
          {text}
          <Divider className={classes.divider}/>
        </Typography>
      </ViewGrow>
    </div>
  );
};
