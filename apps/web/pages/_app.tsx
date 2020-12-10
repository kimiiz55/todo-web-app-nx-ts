import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/css/index.css';
import { AppProvider } from '../context/app';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>Welcome to Todo!</title>
      </Head>
      <div className="app">
        <main className="container mx-auto lg:w-3/4 lg:max-w-lg bg-white h-full min-h-screen flex flex-col">
          <Component {...pageProps} />
        </main>
      </div>
    </AppProvider>
  );
}

export default CustomApp;
