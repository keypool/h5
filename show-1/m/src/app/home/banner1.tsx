import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Banner from './banner';
import ViewGrow from '@/components/view-grow';

// const useStyles = makeStyles((theme) => ({
//   root: {
//   },
// }));

export default () => {
  // const classes = useStyles();

  return (
    <Banner>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <ViewGrow>
            <img width={'100%'} src={'https://oss.faycz.com/keypool/kps1m/1.png'}/>
          </ViewGrow>
        </Grid>
        <Grid item xs={12} style={{textAlign: "center"}}>
          <ViewGrow>
            <img width={'80%'} src={'https://oss.faycz.com/keypool/kps1m/2.png'}/>
          </ViewGrow>
        </Grid>
        <Grid item xs={12}>
          <Grid container item xs={12}>
            <Grid container item xs={7} justify="center" alignItems="center">
              <ViewGrow>
                <img width={'100%'} src={'https://oss.faycz.com/keypool/kps1m/3.png'}/>
              </ViewGrow>
            </Grid>
            <Grid container item xs={5} justify="center" alignItems="center">
              <ViewGrow>
                <img width={'80px'} src={'https://oss.faycz.com/keypool/kps1m/4.png'} style={{marginTop: '20px'}}/>
              </ViewGrow>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <ViewGrow>
                <Divider style={{backgroundColor: '#FFF', width: '15px', marginBottom: '5px'}}/>
              </ViewGrow>
            </Grid>
            <Grid item xs={12}>
              <ViewGrow>
                <Typography variant={"body2"}>地址：深圳会展中心 6号馆</Typography>
              </ViewGrow>
            </Grid>
            <Grid item xs={12}>
              <ViewGrow>
                <Typography variant={"body2"}>时间：2020年8月14日 - 16日</Typography>
              </ViewGrow>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Banner>
  );
};
