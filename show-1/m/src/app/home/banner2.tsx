import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Banner from './banner';
import Title from './title';
import { PATH_PREFIX } from '@/env';
import ViewGrow from '@/components/view-grow';

// const useStyles = makeStyles((theme) => ({
//   desc: {
//     fontSize: '0.75rem'
//   }
// }));

export default () => {
  // const classes = useStyles();

  return (
    <Banner>
        <Grid container>
          <Grid item xs={12}>
            <Title text={'参展内容 - 1'}/>
            <Typography variant={"body1"} style={{marginTop: '20px'}}>Keystore企业级加密资产服务商</Typography>
            <Typography variant={"body1"}>安全、高效、专业</Typography>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid container item xs={8} justify="flex-start" alignItems="center">
              <ViewGrow>
                <img width={'60%'} src={`${PATH_PREFIX}/static/home/keystore.jpg`}/>
              </ViewGrow>
            </Grid>
            <Grid container item xs={4} justify="center" alignItems="center">
              <ViewGrow>
                <div style={{position: 'absolute', right: 0}}>
                  <Typography variant={"h6"}>加密资产网银系统</Typography>
                  <Typography variant={"body1"} style={{fontWeight: 'bold'}}>Corporate Internet Banking</Typography>
                </div>
              </ViewGrow>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid container item xs={4} justify="center" alignItems="center">
              <ViewGrow>
                <div style={{position: 'absolute', left: 0}}>
                  <Typography variant={"h6"}>加密资产托管服务</Typography>
                  <Typography variant={"h6"} style={{fontWeight: 'bold'}}>Custody Service</Typography>
                </div>
              </ViewGrow>
            </Grid>
            <Grid container item xs={8} justify="flex-end" alignItems="center">
              <ViewGrow>
                <img width={'60%'} src={`${PATH_PREFIX}/static/home/keystore.jpg`}/>
              </ViewGrow>
            </Grid>
          </Grid>
        </Grid>
    </Banner>
  );
};
