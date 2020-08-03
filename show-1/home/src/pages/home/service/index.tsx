import React from 'react';
import Head from 'next/head';
import Layout from '@/app/layout';
import App from '@/app/service';
import {BlogType} from '@/app/blog';
import {SERVER_URL, PATH_PREFIX} from '@/env';

const pageSize = 6;

const css = [
  'base',
  'basic',
  'inside_page',
  'serverpro',
  'basic_two',
]

export const getStaticProps = async () => {
  const res = await fetch(SERVER_URL+'/blog/findByPage?pageNum=0&pageSize='+pageSize);
  const data = await res.json();
  const blogs: BlogType[] = data.result;
  const tdkRes = await fetch(SERVER_URL+'/tdk/findByPath?path=/service');
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
        <App {...props}/>
      </Layout>
    </div>
  )
}