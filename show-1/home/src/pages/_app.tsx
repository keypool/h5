import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import {PATH_PREFIX} from "@/env";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>「天蕾」您身边的互联网方案提供商-网站建设-seo优化-网络推广-小程序开发</title>
        <meta name="keywords" content="seo优化,seo推广,网站排名,网络推广,关键词优化,网站制作,网站建设,微信开发,公众号开发,小程序开发,天蕾"/>
        <meta name="description" content="天蕾致力于互联网品牌建设与网络营销，服务领域包括品牌网站建设、移动应用定制、互联网全案制作，一站式整合营销网络推广！全国热线电话：4007806980"/>
        <link rel="canonical" href="http://www.tianlad.com" />
        <meta name="HandheldFriendly" content="true"/>
        <meta baidu-gxt-verify-token="48ce440e470715eb5874ccb010c376a3"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="renderer" content="webkit"/>
        <link rel="manifest" href={`${PATH_PREFIX}/manifest.json`} />
        <link rel="icon" type="image/x-icon" href={`${PATH_PREFIX}/favicon.ico`} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="full-screen" content="yes"/>
        <meta name="x5-fullscreen" content="true"/>
        <meta content="telephone=no" name="format-detection" />
        <meta content="email=no" name="format-detection" />
        <script src={`${PATH_PREFIX}/static/js/judge-terminal-equipment.js`}/>
        <script src={`${PATH_PREFIX}/static/js/jquery-1.8.3.min.js`}/>
        <script src={`${PATH_PREFIX}/static/js/jquery.superslide.2.1.1.js`}/>
        <script src={`${PATH_PREFIX}/static/js/jquery.validate.js`}/>
        <script src={`${PATH_PREFIX}/static/js/jq22.js`}/>
        <script src={`${PATH_PREFIX}/static/js/totop.js`}/>
        <script src={`${PATH_PREFIX}/static/js/seo.js`}/>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

