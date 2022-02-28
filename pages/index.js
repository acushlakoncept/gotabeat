import Head from 'next/head'
import { BaseLayout } from '@components/ui/layout'
import Hero from '@components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Got A Beat</title>
        <meta name="description" content="Listen to licensed beats from music producers with a single click" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

    </>
  )
}

Home.Layout = BaseLayout;