import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Banner from './banner';
import Title from './title';
import ViewGrow from '@/components/view-grow';

// const useStyles = makeStyles((theme) => ({
//   desc: {
//     fontSize: '0.75rem'
//   }
// }));

export default () => {
  // const classes = useStyles();

  return (
    <Banner no={2}>
        <Grid container>
          <Grid item xs={12}>
            <Title text={'Keystore'}/>
            <Typography variant={"body2"} style={{marginTop: '20px'}}>企&nbsp;业&nbsp;级&nbsp;加&nbsp;密&nbsp;资&nbsp;产&nbsp;服&nbsp;务&nbsp;商</Typography>
            <Typography variant={"body2"}>Institutional-grade Crypto Asset Service Provider</Typography>
            <Typography variant={"body2"} style={{marginTop: '20px'}}>安全、高效、专业</Typography>
          </Grid>
          <Grid container item xs={12} spacing={1} style={{height: 140}}>
            <Grid container item xs={4} justify="flex-start" alignItems="center">
              <ViewGrow>
                <img width={'120%'} src={`https://oss.faycz.com/keypool/kps1m/product-1.png`}/>
              </ViewGrow>
            </Grid>
            <Grid container item xs={8} justify="center" alignItems="center">
              <ViewGrow>
                <div>
                  <Typography variant={"body2"}>加密资产网银</Typography>
                  <Typography style={{fontSize: '0.75rem'}}>Keystore Enterprise</Typography>
                </div>
              </ViewGrow>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1} style={{height: 140}}>
            <Grid container item xs={8} justify="center" alignItems="center">
              <ViewGrow>
                <div>
                  <Typography variant={"body2"}>Filecoin矿池资产安全方案</Typography>
                  <Typography style={{fontSize: '0.75rem'}}>Filecoin Mining Pool</Typography>
                  <Typography style={{fontSize: '0.75rem'}}>Asset Security Solutions</Typography>
                </div>
              </ViewGrow>
            </Grid>
            <Grid container item xs={4} justify="flex-end" alignItems="center">
              <ViewGrow>
                <img width={'120%'} src={`https://oss.faycz.com/keypool/kps1m/product-2.png`}/>
              </ViewGrow>
            </Grid>
          </Grid>
        </Grid>
    </Banner>
  );
};
