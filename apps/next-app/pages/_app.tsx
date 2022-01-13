import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/layout/Layout';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-app!</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
