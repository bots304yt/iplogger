import Head from 'next/head'
import '../public/globals.css'

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <title></title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Puggle is an anonymous random chat application that allows you to chat with random strangers." />
            <meta name="keywords" content="puggle, puggle chat, puggle chat app, puggle chat application, puggle chat website, puggle chat site, puggle chat online, puggle chat online free, puggle chat online website, puggle chat online website free, puggle chat online website free no registration"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>
}
  
  