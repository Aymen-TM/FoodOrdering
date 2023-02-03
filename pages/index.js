import Head from 'next/head'
import { Poppins } from '@next/font/google'
import Featured from '../components/sections/Featured'
import PizzaList from '../components/sections/PizzaList'
import axios from 'axios'


const inter = Poppins({ subsets: ['latin'],weight:"400" })



export default function Home({pizzaList}) {


  
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Featured />
      <PizzaList pizzaList={pizzaList} />  
    </div>
  )
}

export const getServerSideProps = async ()=>{
  const response = await axios.get("http://localhost:3000/api/products")
  return{
    props:{
      pizzaList:response.data,
    }
  }
}
