import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const ProductEditModal = ({title,price}) => {
    const [title, setTitle] = useState(title)
    const [price, setPrice] = useState(price)
    const handleClick= ()=>{
        
    }
  return (
    <Box position={"absolute"} display={"flex"} justifyContent={"center"} alignItems={"center"} zIndex={999}  bgcolor={"rgba(197, 197, 197, 0.568)"} top={0} left={0} height={"100vh"} width={"100%"}>
        <Box display={"flex"} gap={2} borderRadius={"20px"} flexDirection={"column"} padding={"50px"} justifyContent={"center"} alignItems={"center"} bgcolor={"white"} width={"35rem"} >
            <Typography variant='h2'>Edit your product</Typography>
            <Box width={"100%"}>
                <TextField value={title} label="Title" placeholder="Title" color="info" focused fullWidth onChange={(e)=>setTitle(e.target.value)} />
            </Box>
            <Box width={"100%"}>
                <TextField value={price} label="Price" placeholder="Price" type={"tel"}  color="info" focused fullWidth onChange={(e)=>setPrice(e.target.value)} />
            </Box>
            <Button variant='contained' disableElevation onClick={()=>handleClick()} >Order</Button>
        </Box>
    </Box>
  )
}

export default ProductEditModal