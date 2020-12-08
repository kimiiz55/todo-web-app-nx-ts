import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/css/index.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to Todo!</title>
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
