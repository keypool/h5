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
            <Typography variant={"body2"} style={{marginTop: '20px'}}>企业级加密资产服务商</Typography>
            <Typography variant={"body2"}>安全、高效、专业</Typography>
            <Typography variant={"body2"} style={{marginTop: '20px'}}>Institutional-grade Crypto</Typography>
            <Typography variant={"body2"}>Asset Service Provider</Typography>
          </Grid>
          <Grid container item xs={12} spacing={1} style={{height: 140}}>
            <Grid container item xs={6} justify="flex-start" alignItems="center">
              <ViewGrow>
                <img width={'80%'} src={`https://oss.faycz.com/keypool/kps1m/product-1.png`}/>
              </ViewGrow>
            </Grid>
            <Grid container item xs={6} justify="center" alignItems="center">
              <ViewGrow>
                <div>
                  <Typography>加密资产网银</Typography>
                  <Typography style={{fontSize: '0.75rem'}}>Keystore Enterprise</Typography>
                </div>
              </ViewGrow>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1} style={{height: 140}}>
            <Grid container item xs={6} justify="center" alignItems="center">
              <ViewGrow>
                <div>
                  <Typography>Filecoin矿池资产安全方案</Typography>
                  <Typography style={{fontSize: '0.75rem'}}>Filecoin Mining Pool Asset Security Solutions</Typography>
                </div>
              </ViewGrow>
            </Grid>
            <Grid container item xs={6} justify="flex-end" alignItems="center">
              <ViewGrow>
                <img width={'80%'} src={`https://oss.faycz.com/keypool/kps1m/product-2.png`}/>
              </ViewGrow>
            </Grid>
          </Grid>
        </Grid>
    </Banner>
  );
};
