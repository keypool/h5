import React from 'react';
import Banner from './banner';
import Contain from './contain';

function Blog({ blogs=[], prePage, nextPage, count }: any) {
  return (
    <>
      <Banner/>
      <Contain blogs={blogs} prePage={prePage} nextPage={nextPage} count={count}/>
      <div className="clear"></div>
      <div style={{height:'30px'}}></div>
    </>
  )
}

export default Blog