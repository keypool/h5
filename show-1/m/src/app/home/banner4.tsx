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
          <Grid container item xs={12} justify="center" alignItems="flex-start">
            <img width={'100%'} src={`${PATH_PREFIX}/static/home/kp_product.jpg`}/>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Typography variant={'body2'}>
              1. 全新配置，AMD Infinity架构
            </Typography>
            <Typography variant={'body2'}>
              2. 企业级硬盘，Intel Optane SSD
            </Typography>
            <Typography variant={'body2'}>
              3. KeyPool定制加速硬件，急速提升时空证明速度
            </Typography>
            <Typography variant={'body2'}>
              4. 扩展成本低至500RMB/T，效率不变，成本节省75%
            </Typography>
            <Typography variant={'body2'}>
              5. T4机房成本价托管，运维费用10000 RMB/年
            </Typography>
            <Typography variant={'body2'}>
              6. 弹性配置，应对算法调整能力强，调整无忧
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Banner>
  );
};
