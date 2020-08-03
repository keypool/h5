import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@/components/theme";
import clsx from "clsx";
import { red } from '@material-ui/core/colors';

type Color = 'skyBlue' | 'grey' | 'skyRed';

interface Props {
  className?: string
  children?: React.ReactNode
  color?: Color
}

const useStyles = (color: Color) => (makeStyles((theme: Theme) => {
  const colors = {
    'skyBlue': {
      backgroundColor: theme.colors.skyBlue,
      borderColor: `${theme.colors.deepSkyBlue} transparent transparent`
    },
    'grey': {
      backgroundColor: theme.palette.grey[400],
      borderColor: `${theme.palette.grey[700]} transparent transparent`
    },
    'skyRed': {
      backgroundColor: red[400],
      borderColor: `${red[800]} transparent transparent`
    }
  }
  return {
    root: {
      width: 56,
      height: 20,
      position: "absolute",
      display: "inline-block",
      backgroundColor: colors[color].backgroundColor,
      color: theme.palette.common.white,
      zIndex: 5,
    },
    content: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 500,
      fontSize: '0.75rem'
    },
    triangle: {
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: 2,
      right: -3,
      border: '3px solid',
      borderColor: colors[color].borderColor,
    }
  };
}))(color);

export default ({className, children, color='skyBlue', ...props}: Props) => {

  const classes = useStyles(color);

  return (
    <div className={clsx(classes.root, className)} {...props}>
      <div className={classes.content}>
        {children}
      </div>
      <div className={classes.triangle}/>
    </div>
  )
}