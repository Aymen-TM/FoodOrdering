import { Box } from '@mui/system'
import React, { useState } from 'react'
import Paper, { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import AddProductModal from '../../components/modals/AddProductModal'

const index = ({products,oreders}) => {

    const [close, setClose] = useState(false)
    const status = ["preparing", "on the way", "delivered","done"];
    const [nav, setNav] = useState('Products')
    const [pizzaList, setPizzaList] = useState(products)
    const [ordersList, setOrdersList] = useState(oreders)
    const [action, setAction] = useState("")
    const [pizza_Id_To_Update, setPizza_Id_To_Update] = useState(null)
    const [pizza_index_To_Update, setPizza_index_To_Update] = useState(null)



    const handleNav =(nav)=>{
        if(nav === 'Products'){
          setNav('Orders') 
        }else{
          setNav('Products')
        }
    }

    const handleDeleteProduct = async (id) => {
        try {
          await axios.delete(
            "http://localhost:3000/api/products/" + id
          );


          setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
        } catch (err) {
          console.log(err);
        }
      };
      const getUpdatedPizzaID = async (id,index,action) => {
        setAction(action)
        setPizza_Id_To_Update(id)
        setPizza_index_To_Update(index)
        setClose(!close)
      };
      const handleDeleteOrder = async (id) => {
        try {
          const res = await axios.delete(
            "http://localhost:3000/api/orders/" + id
          );
          setOrdersList(ordersList.filter((order) => order._id !== id));
        } catch (err) {
          console.log(err);
        }
      };
      const handleStatus = async (id) => {
        console.log(id);
        const item = ordersList.filter((order) => order._id === id)[0];
        const currentStatus = item.status;
    
        try {
          const res = await axios.put("http://localhost:3000/api/orders/" + id, {
            status: currentStatus + 1,
          });
          setOrdersList([
            res.data,
            ...ordersList.filter((order) => order._id !== id),
          ]);
        } catch (err) {
          console.log(err);
        }
      };
      const handleNextStage= async (order)=>{
        if(order.status>=3){
            handleDeleteOrder(order._id)
        }else{
            handleStatus(order._id)
        }
      }
      

  return (
    <Box display={"flex"} position={"relative"} flexDirection={"column"} alignItems={"center"} padding='30px 50px'>
        <Box display={"flex"} gap={2} >
            <Button variant='contained' color={nav=='Products'?'success':'info'} size='large' onClick={()=>handleNav(nav)}>Product</Button>
            <Button variant='contained' color={nav=='Orders'?'success':'info'} size='large' onClick={()=>handleNav(nav)}>Orders</Button>
            {nav==='Products' && <Button variant='contained' color='info' onClick={()=>getUpdatedPizzaID(null,null,"Create")} >Add Product</Button>}
        </Box>
       <Box width={"50rem"} mt={5}>
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }}  aria-label="simple table">
                    <TableHead>
                    {nav =='Products' && 
                    <TableRow>
                        <TableCell align="right" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Image</TableCell>
                        <TableCell align="right" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Title</TableCell>
                        <TableCell align="right" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Price</TableCell>
                        <TableCell align="right" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Action</TableCell>
                    </TableRow>}
                    {nav =='Orders' && <TableRow>
                        <TableCell align="right" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Customer</TableCell>
                        <TableCell align="right" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Total</TableCell>
                        <TableCell align="right" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Payment</TableCell>
                        <TableCell align="right" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Status</TableCell>
                        <TableCell align="right" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Action</TableCell>
                    </TableRow>
                    }
                    </TableHead>
                    <TableBody>
                            { nav =='Products' && pizzaList && pizzaList.map((pizza,index)=>(
                            <TableRow key={pizza._id}>
                                <TableCell align="right">
                                    <Image src={pizza.img} width={50} height={50} />
                                </TableCell>
                                <TableCell align="right">
                                    {pizza.title}
                                </TableCell>
                                <TableCell align="right">
                                    ${pizza.prices[0]}
                                </TableCell>
                                <TableCell align="right" >
                                    <Button  size="small" variant='contained' color='success' onClick={()=>getUpdatedPizzaID(pizza._id,index,"Update")}>Edit</Button>
                                    <Button  size="small" sx={{ml:1}} variant='contained' color='error' onClick={()=>handleDeleteProduct(pizza._id)}>Delete</Button>
                                </TableCell>
                                </TableRow>
                                ))
                            }
                            { nav =='Orders' && ordersList.map((order)=>(
                                <TableRow key={order._id}>
                                    <TableCell align="right">
                                    {order.customer}
                                    </TableCell>
                                    <TableCell align="right">
                                    ${order.total.toFixed(2)}
                                    </TableCell>
                                    <TableCell align="right">
                                    {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                                    </TableCell>
                                    <TableCell align="right">
                                    {status[order.status]}
                                    </TableCell>
                                    <TableCell align="right" >
                                        <Button  size="small" variant='contained' color='success' onClick={()=>handleNextStage(order)}>{order.status>=3?"Delete":"NextStage"}</Button>                                </TableCell>
                                    </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        {close && <AddProductModal pizzaId={pizza_Id_To_Update} pizzaIndex={pizza_index_To_Update} pizza={pizzaList[pizza_index_To_Update]} setPizzaList={()=>setPizzaList()} action={action} close={close} setClose={setClose} />}
    </Box>
  )
}

export const getServerSideProps = async (ctx)=>{
    const myCookie = ctx.req?.cookies || ""
    if(myCookie.token != process.env.TOKEN){
      return{
        redirect:{
          destination:"/admin/login",
          permanant:false
        }
      }
    }

    const allProductResponse = await axios.get(`http://localhost:3000/api/products`)
    const allOredersResponse = await axios.get(`http://localhost:3000/api/orders`)
    return{
      props:{
        products:allProductResponse.data,
        oreders:allOredersResponse.data,
      } 
    }
}

export default index