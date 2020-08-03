import React from 'react';
import Head from 'next/head';
import Layout from '@/app/layout';
import App from '@/app/about';
import {PATH_PREFIX, SERVER_URL} from '@/env';

const css = [
  'basic',
  'css',
  'inside_page',
  'tianlad',
]

export const getStaticProps = async () => {
  const tdkRes = await fetch(SERVER_URL+'/tdk/findByPath?path=/about');
  const tdkData = await tdkRes.json();
  const tdk = tdkData.result[0];
  return {
    props: {
      tdk
    },
  }
}

export default (props: any) => {
  const {tdk} = props;
  return (
    <div>
      <Head>
        <title>{tdk.title}</title>
        <meta name="keywords" content={tdk.keywords}/>
        <meta name="description" content={tdk.description}/>
        {
          css.map((path) => {
            return <link key={path} href={`${PATH_PREFIX}/static/css/${path}.css`} rel="stylesheet" type="text/css"/>;
          })
        }
      </Head>
      <Layout>
        <App/>
      </Layout>
    </div>
  )
}