import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Banner from './banner';
import Title from './title';
import { PATH_PREFIX } from '@/env';
import ViewGrow from '@/components/view-grow';

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
    fontSize: '0.75rem',
    fontWeight: 'bold',
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Banner>
      <Grid container spacing={4}>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Title text={'关于KeyPool'}/>
          </Grid>
          <Grid item xs={12}>
            <ViewGrow>
              <Typography className={classes.desc}>
                KeyPool是Keystore旗下的基于Filecoin网络的技
                术服务平台，创造团队来自Intel，分布式资本，奇虎
                360等企业，拥有丰富的加密资产管理，数据存储，
                企业SaaS服务经验，是Filecoin生态的重要成员。
                KeyPool团队基于Filecoin进行了深入的算法优化，
                由内部研发团队自主设计研发的集群化架构方案，显
                著提升了挖矿性能及出块效率。
              </Typography>
            </ViewGrow>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Title text={'关于Keystore'}/>
          </Grid>
          <Grid item xs={12}>
            <ViewGrow>
              <Typography className={classes.desc}>
                Keystore Group是亚太地区领先的加密资产服务
                商，为机构客户提供银行级别的资产安全存管和网
                银支付服务，客户涵盖了知名机构，交易所，项目
                方，比特币矿工等。旗下产品包括Keystore Internet Banking、KeystoreCustody、KeyPool、KeyPay等。
                2020年1月，Keystore获得了建元基金和分布式
                资本的投资，正式成为业内唯一国资背景的企业级加密资产服务商。
              </Typography>
            </ViewGrow>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid container item xs={3} justify="center" alignItems="flex-start">
            <ViewGrow>
              <img width={'100%'} src={`${PATH_PREFIX}/static/home/keystore.jpg`}/>
            </ViewGrow>
          </Grid>
          <Grid container item xs={3} justify="center" alignItems="flex-start">
            <ViewGrow>
              <img width={'100%'} src={`${PATH_PREFIX}/static/home/keypool.jpg`}/>
            </ViewGrow>
          </Grid>
          <Grid container item xs={6} justify="center" alignItems="flex-start">
            <ViewGrow>
              <div>
                <Typography>
                  www.keypool.com
                </Typography>
                <Typography>
                  www.keystore.com
                </Typography>
              </div>
            </ViewGrow>
          </Grid>
        </Grid>
      </Grid>
    </Banner>
  );
};
