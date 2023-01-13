import Head from 'next/head'
import Layout from '../components/Layout'
import { Poppins } from '@next/font/google'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'



const inter = Poppins({ subsets: ['latin'],weight:"400" })



export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Featured />
        <PizzaList />
      </Layout>
      
    </>
  )
}
