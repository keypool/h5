import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Banner from './banner';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    width: 'calc(100% - 60px)',
    marginLeft: '30px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    textAlign: 'left',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Banner>
      <div className={classes.root}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Typography variant={"h5"}>keystore</Typography>
            <Typography variant={"h4"}>诚邀您出席</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"h5"}>2020.8.14-8.16</Typography>
            <Typography variant={"h5"}>2020第三届深圳</Typography>
            <Typography variant={"h4"}>分布式存储行业大会</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"h5"}>展位号</Typography>
            <Typography variant={"h4"}>6A15B</Typography>
          </Grid>
        </Grid>
      </div>
    </Banner>
  );
};
