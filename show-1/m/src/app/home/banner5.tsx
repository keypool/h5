import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Banner from './banner';

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
  map: {
    width: '100%',
    height: '200px',
  }
}));

export default () => {
  const classes = useStyles();

  React.useEffect(() => {
    const map = new BMap.Map("allmap");
    const point = new BMap.Point(114.067008,22.537156);
    map.centerAndZoom(point,15);
    map.enableScrollWheelZoom(true);
    const marker = new BMap.Marker(point);
    map.addOverlay(marker);
    map.panTo(point);
  }, []);

  return (
    <Banner>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={"h4"}>展会信息</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography variant={"h5"}>2020年8月14日-16日</Typography>
            <Typography variant={"h5"}>深圳会展中心6号馆</Typography>
            <Typography variant={"h5"}>展位号：6A15B</Typography>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <div id="allmap" className={classes.map}></div>
          </Grid>
        </Grid>
      </div>
    </Banner>
  );
};
