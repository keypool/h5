import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Banner from './banner';
import { PATH_PREFIX } from '@/env';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    width: 'calc(100% - 40px)',
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    textAlign: 'left',
  },
  desc: {
    fontSize: '0.75rem'
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Banner>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={"h4"}>参展内容</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant={"h5"}>Filecoin矿池安全解决方案</Typography>
            <Typography variant={"h5"}>Keystore网银系统</Typography>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid container item xs={3} justify="center" alignItems="flex-start">
              <img width={'100%'} src={`${PATH_PREFIX}/static/home/keypool.jpg`}/>
            </Grid>
            <Grid container item xs={9} justify="center" alignItems="center">
              <Typography>
                安全、便捷、专业的加密资产管理系统
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid container item xs={9} justify="center" alignItems="center">
              <Typography>
                KEYSTORE为您解决加密货币存管安全以及财务审计问题
              </Typography>
            </Grid>
            <Grid container item xs={3} justify="center" alignItems="flex-start">
              <img width={'100%'} src={`${PATH_PREFIX}/static/home/keystore.jpg`}/>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Banner>
  );
};
