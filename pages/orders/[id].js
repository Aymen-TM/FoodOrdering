import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import React from 'react'
import Paper from '@mui/material'
import Status from '../../components/Status'
import { paid,delivered,bake,bike } from '../../public/img/index'
import axios from 'axios'


const Order = ({order}) => {
    const statData = [{img:paid,title:"Payment"},{img:bake,title:"Preparing"},{img:bike,title:"on the way"},{img:delivered,title:"Delivered"}]
    const theme = useTheme()
    const status = order.status;

    const statusClass = (index) => {
      if (index - status < 1) return "done";
      if (index - status === 1) return "inProgress";
      if (index - status > 1) return "undone";
    };
  return (
    <Box display={"flex"} flexDirection={{xs:"column",md:"row"}} padding={"50px"}>
        <Box flex={2}>
            <TableContainer component={Paper}  >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left" sx={{fontWeight:"bold" ,fontSize:"16px"}}> Order ID</TableCell>
                        <TableCell align="left" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Customer</TableCell>
                        <TableCell align="left" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Address</TableCell>
                        <TableCell align="left" sx={{fontWeight:"bold" ,fontSize:"16px"}}>Total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell >
                            {order._id}
                            </TableCell>
                            <TableCell align="left" >
                            {order.customer}
                            </TableCell>
                            <TableCell align="left" >
                            {order.address}
                            </TableCell>
                            <TableCell align="left" >
                            {order.total.toFixed(2)}
                            </TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display={"flex"}  justifyContent={"space-between"} width={"80%"} mt={4} >
                {
                    statData.map(({img,title},index)=>(
                        <Status img={img} stat={title} status={statusClass(index)}  />
                    ))
                }
                
        
            </Box>
        </Box>

        <Box flex={1} padding={"20px"}>
            <Box  bgcolor={theme.palette.grey[800]} gap={2} padding={"20px 50px 50px 50px"} maxHeight={"300px"} width={"90%"} display={"flex"} flexDirection={"column"}>
                <Typography variant='h3' fontWeight={"bold"} color={"white"}>CART TOTAL</Typography>
                <Box>
                    <Box>
                        <Typography variant='body1' color={"white"}>Subtotal: $0.00</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1' color={"white"}>Discount: $0.00</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1' color={"white"}>Total: $79.60</Typography>
                    </Box>
                </Box>
                <Button variant='contained' disableElevation >PAID</Button>
            </Box>
        </Box>
    </Box>
  )
}

export const getServerSideProps = async ({params})=>{
    const response = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
    return{
      props:{
        order:response.data,
      } 
    }
}



export default Order