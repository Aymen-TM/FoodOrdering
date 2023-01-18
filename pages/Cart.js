import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import React from 'react'
import Paper from '@mui/material'
import { pizza } from '../public/img/index'
import Image from 'next/image'
import { useSelector } from 'react-redux'


const Cart = () => {
    const theme = useTheme()
    const products = useSelector((state)=>state.cart.products)
    const total = useSelector((state)=>state.cart.total)

    const tableHead =["Product","Name","Extras","Price","Quantity","Total"]
 
  return (
    <Box display={"flex"} flexDirection={{xs:"column",md:"row"}} padding={"50px"}>
        <Box flex={2}>
            <TableContainer component={Paper}  >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                    <TableHead >
                    <TableRow>
                        {
                         tableHead.map((title)=><TableCell align="left" sx={{fontWeight:"bold" ,fontSize:"16px"}}>{title}</TableCell>)
                        }
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        products.map((item)=>(
                            <TableRow >
                            <TableCell >
                                <Box position={"relative"} height={"100px"} width={"100px"}>
                                    <Image src={item.img}  fill style={{objectFit:"contain"}} alt="pizza" />
                                </Box>
                            </TableCell>
                            <TableCell align="left" >
                                {`${item.title}`}
                            </TableCell>
                            <TableCell align="left" >
                            {item.options.map((option)=><Typography>{option.text}</Typography> )}
                            </TableCell>
                            <TableCell align="left" >
                            {item.price}
                            </TableCell>
                            <TableCell align="left">
                            {item.quantity}
                            </TableCell>
                            <TableCell align="left">
                            {item.totalPrice}
                            </TableCell>
                        </TableRow>
                        ))
                        }
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

        <Box flex={1} padding={"20px"}>
            <Box  bgcolor={theme.palette.grey[800]} gap={2} padding={"20px 50px 50px 50px"} maxHeight={"300px"} width={"90%"} display={"flex"} flexDirection={"column"}>
                <Typography variant='h3' fontWeight={"bold"} color={"white"}>CART TOTAL</Typography>
                <Box>
                    <Box>
                        <Typography variant='body1' color={"white"}>Subtotal: $79.60</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1' color={"white"}>Discount: $0.00</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1' color={"white"}>Total: ${total}</Typography>
                    </Box>
                </Box>
                <Button variant='contained' disableElevation >CHECKOUT NOW!</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Cart