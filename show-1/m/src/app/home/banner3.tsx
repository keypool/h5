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
          <Title text={'参展内容 - 2'}/>
          <Typography variant={"body2"} style={{marginTop: '20px'}}>KeyPool - 矿池品牌</Typography>
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
                - 扩展成本低至 500 RMB/T，成本节省 75%
              </Typography>
              <Typography className={classes.desc}>
                - T4机房成本价托管，运维费用 10000 RMB/年
              </Typography>
              <Typography className={classes.desc}>
                - 弹性配置，应对算法调整能力强，调整无忧
              </Typography>
            </>
          </ViewGrow>
        </Grid>
      </Grid>
    </Banner>
  );
};
