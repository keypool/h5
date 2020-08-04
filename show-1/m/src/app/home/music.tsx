import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    
  },
  icon: {
    color: '#FFF',
    border: '2px solid',
    borderRadius: '50%',
    transform: 'rotate(270deg)',
    position: 'fixed',
    zIndex: 4,
    right: 20,
    top: 20,
    width: 30,
    height: 30,
    animation: "$arrow 1.5s linear infinite",
  },
  "@keyframes arrow": {
    "0%": {
      transform: 'rotate(0deg)',
    },
    "100%": {
      transform: 'rotate(360deg)',
    }
  },
  hide: {
    display: 'none'
  }
}));

export default () => {
  const classes = useStyles();
  const auditRef = React.useRef<any>();
  const [listen, setListen] = React.useState(false);

  const handleChangeListen = () => {
    setListen(!listen);
    if(listen){
      handlePause();
    }else{
      handlePlay();
    }
  }

  React.useEffect(() => {
    const kps1mAudit = localStorage.getItem('kps1mAudit');
    if(kps1mAudit !== '0'){
      setListen(true);
      handlePlay();
    }
  }, []);

  const handlePlay = () => {
    auditRef.current.play();
    localStorage.removeItem('kps1mAudit');
  }

  const handlePause = () => {
    auditRef.current.pause();
    localStorage.setItem('kps1mAudit', '0');
  }

  return (
    <>
      <MusicNoteIcon className={clsx({[classes.icon]: listen, [classes.hide]: !listen})} onClick={handleChangeListen}/>
      <MusicOffIcon className={clsx({[classes.icon]: !listen, [classes.hide]: listen})} onClick={handleChangeListen}/>
      {/* <audio ref={auditRef} controls src={`${PATH_PREFIX}/static/home/music1.mp3`} hidden/> */}
      <audio ref={auditRef} controls src={`https://oss.faycz.com/keypool/music/star-wars.mp3`} hidden/>
    </>
  );
};
