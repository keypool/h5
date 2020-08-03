import React from 'react';
import {SERVER_URL, PATH_PREFIX} from '@/env';
import fetch from 'node-fetch';
import Blogs from '@/app/blogs';
import {BlogType} from '@/app/blog';
import Head from 'next/head';
import Layout from '@/app/layout';
const pageSize = 10;

const findCount = async () => {
  const res = await fetch(SERVER_URL+'/blog/findCount');
  const data = await res.json();
  return data.result[0].total;
}

export const getStaticProps = async ({params}: any) => {
  const res = await fetch(SERVER_URL+'/blog/findByPage?pageNum='+params.page+'&pageSize='+pageSize);
  const data = await res.json();
  const blogs: BlogType[] = data.result;
  const total = data.count;
  const hasPre = Number(params.page) > 0;
  const hasNext = (Number(params.page)+1)*pageSize < total;
  const tdkRes = await fetch(SERVER_URL+'/tdk/findByPath?path=/blogs');
  const tdkData = await tdkRes.json();
  const tdk = tdkData.result[0];
  return {
    props: {
      blogs,
      count: total,
      prePage: hasPre ? (Number(params.page) - 1) : -1,
      nextPage: hasNext ? (Number(params.page) + 1) : -1,
      tdk
    },
  }
}

export async function getStaticPaths() {
  const total = await findCount();
  const count: number = Math.ceil(total/pageSize);
  const paths = [];
  for(let i = 0; i < count; i++){
    paths.push(`${PATH_PREFIX}/blogs/${i}`);
  }
  return {
    paths,
    fallback: false,
  }
}

const css = [
  'basic',
  'css',
  'inside_page',
  'tianlad',
]

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
        <Blogs {...props}/>
      </Layout>
    </div>
  )
}