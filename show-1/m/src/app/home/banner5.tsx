import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Banner from './banner';
import Title from './title';
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
  },
  link: {
    fontSize: '0.75rem',
    color: theme.palette.primary.main,
  },
  map: {
    width: '100%',
    height: '150px',
  },
  mapWrapper: {
    overflow: 'hidden',
    height: 100,
    borderRadius: '4px',
    width: '100%',
  }
}));

const mapUrl = 'https://apis.map.qq.com/uri/v1/marker?marker=coord:22.531711,114.060687;&referer=myapp';

export default () => {
  const classes = useStyles();
  const mapRef = React.useRef<any>();

  React.useEffect(() => {
    const map = new BMap.Map(mapRef.current);
    const mapStyle={  style : "grayscale" }  
    map.setMapStyle(mapStyle);
    const point = new BMap.Point(114.067008,22.537156);
    map.centerAndZoom(point,15);
    map.enableScrollWheelZoom(true);
    const marker = new BMap.Marker(point);
    map.addOverlay(marker);
    map.panTo(point);
  }, []);

  return (
    <Banner no={5}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Title text={'展会信息'}/>
          <ViewGrow>
            <Typography variant={"body2"} style={{marginTop: '20px'}}>时间：2020年8月14日 - 16日</Typography>
          </ViewGrow>
          <ViewGrow>
            <Box mt={4}>
              <img width={'100%'} src={'https://oss.faycz.com/keypool/kps1m/show-2.jpg'}/>
            </Box>
          </ViewGrow>
          <Box mt={5}>
          <Grid container item xs={12} spacing={1}>
            <Grid container item xs={5} alignItems={"center"}>
              <ViewGrow>
                <div className={classes.mapWrapper}>
                  <div ref={mapRef} className={classes.map}></div>
                </div>
              </ViewGrow>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid container item xs={6} alignItems={"center"}>
              <div>
                <ViewGrow>
                  <Typography variant={"body2"}>深圳会展中心 6号馆</Typography>
                </ViewGrow>
                <ViewGrow>
                  <Typography className={classes.desc}>广东省-深圳市-福田区-福田街道福安社区福华三路与金田路交叉口</Typography>
                </ViewGrow>
                <ViewGrow>
                  <a className={classes.link} onClick={() => window.open(mapUrl)}>去这里 &gt;</a>
                </ViewGrow>
              </div>
            </Grid>
          </Grid>
          </Box>
          
        </Grid>
      </Grid>
    </Banner>
  );
};
