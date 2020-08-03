import React from 'react';
import Grow, { GrowProps } from "@material-ui/core/Grow";
import {isInViewPortOfTwo} from '@/lib/is-in-view';

export default ({children, ...props}: GrowProps) => {
  const [show, setShow] = React.useState(false);
  const ref = React.createRef();

  React.useEffect(() => {
    const interval = !show ? setInterval(() => {
      if(!show && ref.current && isInViewPortOfTwo(ref.current)){
        interval && clearInterval(interval);
        setShow(true);
      }
    }, 500) : undefined;
    return () => {
      interval && clearInterval(interval);
    }
  });

  return (
    <Grow
      in={show}
      timeout={2000}
      ref={ref}
      {...props}
    >
      {children}
    </Grow>
  )
}