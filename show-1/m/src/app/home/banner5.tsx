import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Banner from './banner';
import Title from './title';
import ViewGrow from '@/components/view-grow';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: theme.palette.common.white,
//     width: 'calc(100% - 40px)',
//     marginLeft: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     height: '100%',
//     textAlign: 'left',
//   },
//   map: {
//     width: '100%',
//     height: '200px',
//   },
//   mapWrapper: {
//     overflow: 'hidden',
//     height: 150,
//     borderRadius: '4px',
//     width: '100%',
//   }
// }));

export default () => {
  // const classes = useStyles();
  // const mapRef = React.useRef<any>();

  React.useEffect(() => {
    // const map = new BMap.Map(mapRef.current);
    // const mapStyle={  style : "grayscale" }  
    // map.setMapStyle(mapStyle);
    // const point = new BMap.Point(114.067008,22.537156);
    // map.centerAndZoom(point,16);
    // map.enableScrollWheelZoom(true);
    // const marker = new BMap.Marker(point);
    // map.addOverlay(marker);
    // map.panTo(point);
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
            <Typography variant={"body2"}>地点：深圳会展中心 6号馆</Typography>
          </ViewGrow>
          <ViewGrow>
            <Typography variant={"body2"}>展位号：6A15A</Typography>
          </ViewGrow>
        </Grid>
        
        {/* <Grid container item xs={12} spacing={1}>
          <ViewGrow>
            <div className={classes.mapWrapper}>
              <div ref={mapRef} className={classes.map}></div>
            </div>
          </ViewGrow>
        </Grid> */}
        <Grid container item xs={12} alignItems={"center"}>
          <ViewGrow>
            <img width={'100%'} src={'https://oss.faycz.com/keypool/kps1m/show-1.png'}/>
          </ViewGrow>
        </Grid>
      </Grid>
    </Banner>
  );
};
