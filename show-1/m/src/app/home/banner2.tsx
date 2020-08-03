import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Top from '@/app/home/top';
// import { PATH_PREFIX } from '@/env';
import Banner from './banner';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     background: `url('${PATH_PREFIX}/static/banner/1.png') no-repeat center`,
//     backgroundSize: 'cover',
//     color: theme.palette.common.white,
//     width: '100%',
//     // paddingTop: theme.spacing(4),
//     // display: 'flex',
//     // justifyContent: 'space-between',
//     height: '100vh'
//   },
// }));

export default () => {

  return (
    <Banner no={2}/>
  );
};
