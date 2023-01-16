import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import React from 'react'
import Paper from '@mui/material'
import { pizza } from '../public/img/index'
import Image from 'next/image'
const Cart = () => {
    const theme = useTheme()
  return (
    <Box display={"flex"} flexDirection={{xs:"column",md:"row"}} padding={"50px"}>
        <Box flex={2}>
            <TableContainer component={Paper}  >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Extras</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Quantity</TableCell>
                        <TableCell align="left">Total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell >
                                <Box position={"relative"} height={"100px"} width={"100px"}>
                                    <Image src={pizza}  fill style={{objectFit:"contain"}} alt="pizza" />
                                </Box>
                            </TableCell>
                            <TableCell align="left" >
                                CORALZO
                            </TableCell>
                            <TableCell align="left" >
                            Double ingredient, spicy sauce
                            </TableCell>
                            <TableCell align="left" >
                                $19.90
                            </TableCell>
                            <TableCell align="left">
                                2
                            </TableCell>
                            <TableCell align="left">
                            $39.80
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell >
                                <Box position={"relative"} height={"100px"} width={"100px"}>
                                    <Image src={pizza}  fill style={{objectFit:"contain"}} alt="pizza" />
                                </Box>
                            </TableCell>
                            <TableCell align="left" >
                                CORALZO
                            </TableCell>
                            <TableCell align="left" >
                            Double ingredient, spicy sauce
                            </TableCell>
                            <TableCell align="left" >
                                $19.90
                            </TableCell>
                            <TableCell align="left">
                                2
                            </TableCell>
                            <TableCell align="left">
                            $39.80
                            </TableCell>
                        </TableRow>
                        
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
                        <Typography variant='body1' color={"white"}>Total: $79.60</Typography>
                    </Box>
                </Box>
                <Button variant='contained' disableElevation >CHECKOUT NOW!</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Cart