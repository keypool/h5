import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Banner from './banner';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
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
    const map = new BMap.Map("allmap");
    const point = new BMap.Point(114.067008,22.537156);
    map.centerAndZoom(point,15);
    map.enableScrollWheelZoom(true);
    const marker = new BMap.Marker(point);
    map.addOverlay(marker);
    map.panTo(point);
  }, []);

  return (
    <Banner no={5} arrow={false}>
      <div className={classes.root}>
        <div id="allmap" className={classes.map}></div>
      </div>
    </Banner>
  );
};
