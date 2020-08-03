import React from 'react';
import Head from 'next/head';
// import { InferGetStaticPropsType } from 'next';
import {SERVER_URL, PATH_PREFIX} from '@/env';
import fetch from 'node-fetch';
import Layout from '@/app/layout';
import Blog, {BlogType} from '@/app/blog';
// import {getJson} from '@fay-react/lib/fetch';

const css = [
  'basic',
  'css',
  'inside_page',
]

const findIds = async () => {
  const res = await fetch(SERVER_URL+'/blog/findIds');
  const data = await res.json();
  return data;
}

const findById = async (id: number) => {
  const res = await fetch(SERVER_URL+'/blog/findById?id='+id);
  const data = await res.json();
  return data;
}

const getPreAndNext = async (id: number) => {
  const res = await findIds();
  const ids: number[] = res.result;
  const index = ids.findIndex((_id) => _id === id);
  let preId = 0;
  let nextId = 0;
  if(index > 0){
    preId = ids[index-1];
  }
  if(index < ids.length - 1){
    nextId = ids[index+1];
  }
  return {preId, nextId};
}

export const getStaticProps = async ({params}: any) => {
  let preBlog: BlogType|null = null;
  let nextBlog: BlogType|null = null;
  const res = await findById(Number(params.id));
  const blog: BlogType = res.result[0];
  const {preId, nextId} = await getPreAndNext(Number(params.id));
  if(preId>0){
    const preRes = await findById(preId);
    preBlog = preRes.result[0];
  }
  if(nextId>0){
    const nextRes = await findById(nextId);
    nextBlog = nextRes.result[0];
  }
  return {
    props: {
      blog,
      preBlog,
      nextBlog
    },
  }
}

export async function getStaticPaths() {
  const res = await findIds();
  const paths = res.result.map((item: any) => {
    return `${PATH_PREFIX}/blog/${item.id}`;
  })
  return {
    paths,
    fallback: false,
  }
}

export default ({blog, preBlog, nextBlog}: any) => {
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <meta name="keywords" content={blog.keywords}/>
        <meta name="description" content={blog.description}/>
        {
          css.map((path) => {
            return <link key={path} href={`${PATH_PREFIX}/static/css/${path}.css`} rel="stylesheet" type="text/css"/>;
          })
        }
      </Head>
      <Layout>
        <Blog blog={blog} preBlog={preBlog} nextBlog={nextBlog}/>
      </Layout>
    </div>
  )
}