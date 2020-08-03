import React from 'react';
import Head from 'next/head';
import {PATH_PREFIX, SERVER_URL} from '@/env';
import Layout from '@/app/layout';
import App from '@/app/home';

const css = [
  'basic',
  'css_two',
  'inside_page',
  'style',
  'page',
  'animate.min',
]

export const getStaticProps = async () => {
  const res = await fetch(SERVER_URL+'/blog/findByPage?pageNum=0&pageSize=3');
  console.log(res);
  const data = await res.json();
  console.log(data);;
  const blogs = data.result;
  const tdkRes = await fetch(SERVER_URL+'/tdk/findByPath?path=/');
  const tdkData = await tdkRes.json();
  const tdk = tdkData.result[0];
  return {
    props: {
      blogs,
      tdk
    },
  }
}

export default (props: any) => {
  const tdk = props.tdk;
  return (
    <>
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
        <App {...props}/>
      </Layout>
    </>
  )
}