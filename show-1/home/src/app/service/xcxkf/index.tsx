import React from 'react';
import Banner from './banner';
import VrService from './vr-service';
import VrSelect from './vr-select';
import VrScenes from './vr-scenes';
import VrCase from './vr-case';
import PageAdvantage from './page-advantage';
import Customer from '../../home/customer';
import VrProcess from './vr-process';
import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = PATH_PREFIX+'/static/js/service/xcxkf.js';
    document.body.appendChild(script);
  }, [])

  return (
    <>
      <Banner/>
      <VrService/>
      <VrSelect/>
      <VrScenes/>
      <VrCase/>
      <PageAdvantage/>
      <Customer/>
      <VrProcess/>
    </>
  )
}