import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Banner from './banner';
import Title from './title';
import { PATH_PREFIX } from '@/env';
import ViewGrow from '@/components/view-grow';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';

const useStyles = makeStyles(() => ({
  desc: {
    fontSize: '0.75rem',
    display: 'flex',
    alignItems: 'center'
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Banner no={4}>
      <Grid container spacing={4}>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Title text={'关于我们'}/>
          </Grid>
          <Grid item xs={12}>
            <ViewGrow>
              <Typography variant={'body2'}>
                Keystore Group是亚太地区领先的加密资产服务商，为机构客户提供银行级别的资产安全存管和网银支付服务。旗下产品包括Keystore Enterprise、Keystore Custody、KeyPool等。2020年1月，Keystore获得了建元基金和分布式资本的投资，正式成为业内唯一国资背景的企业级加密资产服务商。
              </Typography>
            </ViewGrow>
            <ViewGrow>
              <Typography variant={'body2'} style={{marginTop: '20px'}}>
                KeyPool是Keystore旗下的基于Filecoin网络的技术服务平台，创始团队来自Intel，分布式资本，奇虎360等企业，拥有丰富的加密资产管理，数据存储，企业SaaS服务经验，是Filecoin生态的重要成员。KeyPool团队基于Filecoin进行了深入的算法优化，由内部研发团队自主设计研发的集群化架构方案，显著提升了挖矿性能及出块效率。
              </Typography>
            </ViewGrow>
          </Grid>
          <Grid container item xs={3} justify="center" alignItems="center">
            <ViewGrow>
              <img width={'100%'} src={`${PATH_PREFIX}/static/home/keystore.jpg`}/>
            </ViewGrow>
          </Grid>
          <Grid container item xs={3} justify="center" alignItems="center">
            <ViewGrow>
              <img width={'100%'} src={`${PATH_PREFIX}/static/home/keypool.jpg`}/>
            </ViewGrow>
          </Grid>
          <Grid container item xs={6} justify="center" alignItems="center">
            <ViewGrow>
              <div>
                {/* <Typography className={classes.desc}>
                  了解更多业务，请联系我们
                </Typography> */}
                <Typography className={classes.desc}>
                  www.keystore.com
                </Typography>
                <Typography className={classes.desc}>
                  www.keypool.com
                </Typography>
                <Typography className={classes.desc}>
                  <PhoneForwardedIcon style={{width: '0.75rem', height: '0.75rem'}}/>&nbsp;400 820 3960
                </Typography>
                <Typography className={classes.desc}>
                  <PhonelinkRingIcon style={{width: '0.75rem', height: '0.75rem'}}/>&nbsp;131 6284 7705
                </Typography>
              </div>
            </ViewGrow>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          
        </Grid>
      </Grid>
    </Banner>
  );
};
