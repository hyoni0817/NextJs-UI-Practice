import React, { FC } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';

const UIPractice: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>UI 테스트</title>
    </Head>
    <Component {...pageProps} />
  </>
);
export default UIPractice;
