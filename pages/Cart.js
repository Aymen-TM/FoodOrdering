import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Paper from '@mui/material'
import Image from 'next/image'
import { useEffect } from "react";
import {
    PayPalButtons,
    usePayPalScriptReducer,
    PayPalScriptProvider,
} from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { reset } from '../redux/cartSlice'
import CashDetailedModal from '../components/modals/CashDetailedModal';



const Cart = () => {
    const {palette} = useTheme()
    const router = useRouter()
    const dispatch = useDispatch()

    const products = useSelector((state)=>state.cart.products)
    const total = useSelector((state)=>state.cart.total)
    const tableHead =["Product","Name","Extras","Price","Quantity","Total"]
    const [checkOut, setCheckOut] = useState(false)
    const [cashDetailed, setCashDetailed] = useState(false) 

    const createOrder = async (orderData)=>{
        try {
            const res = await axios.post(`http://localhost:3000/api/orders`,orderData)
            dispatch(reset())
            if(res.status == 201){
                router.push(`/orders/${res.data._id}`)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // This values are the props in the UI
const style = {"layout":"horizontal"};
const currency = "USD";

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner ,amount}) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        const shipping = details.purchase_units[0].shipping
                        createOrder({
                            customer:shipping.name.full_name,
                            address:shipping.address.address_line_1,
                            total:amount,
                            method:1
                        })
                    });
                }}
            />
        </>
    );
}









 
  return (
    <Box display={"flex"} flexDirection={{xs:"column",md:"row"}} padding={"50px"}>
        <Box flex={2} overflow={"auto"}>
            <TableContainer component={Paper}  >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            {
                            tableHead.map((title)=><TableCell key={title} align="left" sx={{fontWeight:"bold" ,fontSize:"16px"}}>{title}</TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        products.map((item)=>(
                            <TableRow key={item.id}>
                            <TableCell >
                                <Box position={"relative"} height={"100px"} width={"100px"}>
                                    <Image src={item.img}  fill style={{objectFit:"contain"}} alt="pizza" />
                                </Box>
                            </TableCell>
                            <TableCell align="left" >
                                {`${item.title}`}
                            </TableCell>
                            <TableCell align="left" >
                            {item.options.map((option)=><Typography key={option._id}>{option.text}</Typography> )}
                            </TableCell>
                            <TableCell align="left" >
                            {parseFloat(item.price.toFixed(2)) }
                            </TableCell>
                            <TableCell align="left">
                            {item.quantity}
                            </TableCell>
                            <TableCell align="left">
                            {parseFloat(item.totalPrice.toFixed(2))}
                            </TableCell>
                        </TableRow>
                        ))
                        }
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

        <Box flex={1}>
            <Box  bgcolor={palette.grey[800]} gap={2} padding={"20px 50px 50px 50px"} maxHeight={"300px"} width={"90%"} display={"flex"} flexDirection={"column"}>
                <Typography variant='h3' fontWeight={"bold"} color={"white"}>CART TOTAL</Typography>
                <Box>
                    <Box>
                        <Typography variant='body1' color={"white"}>Subtotal: $0.00</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1' color={"white"}>Discount: $0.00</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1' color={"white"}>Total: ${parseFloat(total.toFixed(2))}</Typography>
                    </Box>
                </Box>
                <Stack direction={"column"} gap={1}>
                        <Button variant='outlined' color='secondary'  onClick={()=>setCashDetailed(!cashDetailed)} disableElevation  fullWidth >CASH ON DELIVERY</Button>
                        <PayPalScriptProvider
                            options={{
                                "client-id": "AVUbZdm0kTDD61yD3JRNV1NUzWhFvMW6921T3mdeU5-BYn4YNIJmW9buQnp2b4o-vMItZfUIky3Mc10p",
                                components: "buttons",
                                currency: "USD",
                                "disable-funding":"credit,card,p24"
                            }}
                        >
                            <ButtonWrapper currency={currency} showSpinner={false} amount={total}  />
                        </PayPalScriptProvider>
                </Stack>
                
                
            </Box>
        </Box>
        {cashDetailed && <CashDetailedModal total={total} createOrder={createOrder} setCashDetailed={()=>setCashDetailed()} cashDetailed={cashDetailed} />}
    </Box>
  )
}

export default Cart




