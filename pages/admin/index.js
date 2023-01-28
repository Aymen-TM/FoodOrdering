import { Box } from '@mui/system'
import React, { useState } from 'react'
import Paper, { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'

const index = ({products,oreders}) => {

    const status = ["preparing", "on the way", "delivered"];
    const [nav, setNav] = useState('Products')
    const [pizzaList, setPizzaList] = useState(products)
    const [ordersList, setOrdersList] = useState(oreders)

    const handleNav =(nav)=>{
        setNav(nav)
    }

    const handleDeleteProduct = async (id) => {
        try {
          const res = await axios.delete(
            "http://localhost:3000/api/products/" + id
          );
          setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
        } catch (err) {
          console.log(err);
        }
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
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} padding='30px 50px'>
        <Box display={"flex"} justifyContent="space-evenly" width={"100%"}>
            <Button variant='contained' color='info' size='large' onClick={()=>handleNav("Products")}>Products</Button>
            <Button variant='contained' color='info' size='large' onClick={()=>handleNav("Orders")}>Orders</Button>
        </Box>
       <Box width={"50rem"} mt={5}>
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }}  aria-label="simple table">
                    <TableHead>
                    {nav =='Products' && <TableRow>
                        <TableCell align="right">Image</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>}
                    {nav =='Orders' && <TableRow>
                        <TableCell align="right">Customer</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Payment</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    }
                    </TableHead>
                    <TableBody>
                            { nav =='Products' && pizzaList.map((pizza)=>(
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
                                    <Button  size="small" variant='contained' color='success'>Edit</Button>
                                    <Button  size="small" sx={{ml:1}} variant='contained' color='error' onClick={()=>handleDelete(pizza._id)}>Delete</Button>
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
                                    ${order.total}
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
    </Box>
  )
}

export const getServerSideProps = async ()=>{
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