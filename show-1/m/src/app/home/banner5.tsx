import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Top from '@/app/home/top';
// import { PATH_PREFIX } from '@/env';
import Banner from './banner';

const useStyles = makeStyles(() => ({
  root: {
    // background: `url('${PATH_PREFIX}/static/banner/1.png') no-repeat center`,
    // backgroundSize: 'cover',
    // color: theme.palette.common.white,
    width: '100%',
    // // paddingTop: theme.spacing(4),
    display: 'flex',
    // // justifyContent: 'space-between',
    height: '100%',
    justifyContent: 'center',
  },
  map: {
    width: '85%',
    height: '35%',
    top: '45%'
  }
}));

export default () => {

  const classes = useStyles();

  React.useEffect(() => {
    var map = new BMapGL.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(114.067008,22.537156), 18);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.setHeading(64.5);
    map.setTilt(73);
  }, []);

  return (
    <Banner no={5} arrow={false}>
      <div className={classes.root}>
        <div id="allmap" className={classes.map}></div>
      </div>
    </Banner>
  );
};
