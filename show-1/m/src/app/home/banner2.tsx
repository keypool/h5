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
            <Typography variant={"h4"}>关于我们</Typography>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant={"h5"}>关于KeyPool</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.desc}>
                KeyPool是Keystore旗下的基于Filecoin网络的技
                术服务平台，由资深区块链研发工程师，边缘计算
                及分布式存储专家倾力打造，创造团队来自Intel，
                分布式资本，奇虎360等企业，深耕行业多年，拥
                有丰富的加密资产管理，数据存储，企业SaaS服
                务经验。从17年Filecoin项目推出我们就保持高度
                关注，与ProtocolLabs社区有多年深入的技术创新
                交流，是Filecoin生态的重要成员。
              </Typography>
            </Grid>
            <Grid container item xs={3} justify="center" alignItems="flex-start">
              <img width={'100%'} src={`${PATH_PREFIX}/static/home/keypool.jpg`}/>
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.desc}>
                目前，我们已与国内多家Tier4最高级别的IDC紧密
                合作，拥有稳定的托管资源。同时，KeyPool基于
                Filecoin进行了深入的算法优化，由内部研发团队
                自主设计研发的集群化架构方案，显著提升了挖矿
                性能及出块效率。
              </Typography>
            </Grid>
          </Grid>
          
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant={"h5"}>关于Keystore</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.desc}>
                KeystoreGroup是亚太地区领先的加密资产服务
                商，为机构客户提供银行级别的资产安全存管和网
                银支付服务，客户涵盖了知名机构，旗下产品包括
                Keystore Internet Banking、KeystoreCustody、
                KeyPay、KeyPool等。2020年1月，Keystore获得
                了建元基金和分布式资本的投资，正式成为业内唯
                一国资背景的企业级加密资产服务商。
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
