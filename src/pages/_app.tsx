import React, { FC } from 'react';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import ReactHelmet from '../components/share/ReactHelmet';

const UIPractice: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ReactHelmet title="UI 테스트" description="UI 테스트 페이지 입니다." siteName="UI TEST" />
    <Component {...pageProps} />
  </>
);
export default UIPractice;
