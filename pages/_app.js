import App from 'next/app';
import Head from 'next/head';
import React from 'react';

//import '../styles/globals.css'
import '../style.css';

class CynthiaApp extends App {
  render(){
    const { Component, pageProps } = this.props;

    return(
      <>
        <Head>
         <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap" rel="stylesheet" /> 
        </Head>
          <Component {...pageProps} />
      </>
    )
  }
};

export default CynthiaApp;
