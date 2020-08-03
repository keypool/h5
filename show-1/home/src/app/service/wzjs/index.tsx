import React from 'react';
import Banner from './banner';
import WebExperience from './web-experience';
import Website from './website';
import WebAdvantage from './web-advantage';
import RelatedCase from './related-case';
import PageSolution from './page-solution';
import Customer from '../../home/customer';
import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = PATH_PREFIX+'/static/js/service/wzjs.js';
    document.body.appendChild(script);
  }, [])

  return (
    <>
      <Banner/>
      <Website/>
      <WebExperience/>
      <WebAdvantage/>
      <RelatedCase/>
      <PageSolution/>
      <Customer/>
    </>
  )
}