import Head from 'next/head'
import { BaseLayout } from '@components/ui/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Got A Beat</title>
        <meta name="description" content="Listen to licensed beats from music producers with a single click" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>
    </>
  )
}

Home.Layout = BaseLayout;