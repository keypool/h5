import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Banner from './banner';
import Title from './title';
import { PATH_PREFIX } from '@/env';
import ViewGrow from '@/components/view-grow';

const useStyles = makeStyles(() => ({
  desc: {
    fontSize: '0.875rem',
    // fontWeight: 'bold'
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Banner no={3}>
      <Grid container>
        <Grid item xs={12}>
          <Title text={'KeyPool'}/>
          <Typography variant={"body2"} style={{marginTop: '20px'}}>矿池品牌</Typography>
          <Typography variant={"body2"}>高效集群方案：CPU服务器 x GPU服务器 x 存储柜</Typography>
        </Grid>
        <Grid container item xs={12} justify="center" alignItems="flex-start">
          <ViewGrow>
            <img width={'100%'} src={`${PATH_PREFIX}/static/home/kp_product.jpg`}/>
          </ViewGrow>
        </Grid>
        <Grid item xs={12}>
          <ViewGrow>
            <>
              <Box mb={1.5}>
                <Typography>
                  方案特点
                </Typography>
              </Box>
              <Typography className={classes.desc}>
                - 规模效应优势强，成本更低
              </Typography>
              <Typography className={classes.desc}>
                - 最大化利用计算资源，加快算力部署
              </Typography>
              <Typography className={classes.desc}>
                - 运维稳定，保障挖矿收益和存储服务
              </Typography>
            </>
          </ViewGrow>
        </Grid>
      </Grid>
    </Banner>
  );
};
