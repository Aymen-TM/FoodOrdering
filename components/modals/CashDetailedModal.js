import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRef } from 'react'

const CashDetailedModal = ({total,createOrder,setCashDetailed,cashDetailed}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const wrapper = useRef(null)
    const handleClick= ()=>{
        createOrder({customer:name,address,total,method:0})
        setCashDetailed(!cashDetailed)
    }
    const handlClickOut =(e)=>{
        if(e.target == wrapper.current){
            setCashDetailed(!cashDetailed)
        }
    }
  return (
    <Box position={"absolute"} ref={wrapper} display={"flex"} justifyContent={"center"} alignItems={"center"} zIndex={999}  bgcolor={"rgba(197, 197, 197, 0.568)"} top={0} left={0} height={"100vh"} width={"100%"} onClick={(e)=>handlClickOut(e)}>
        <Box display={"flex"}  gap={2} borderRadius={"20px"} flexDirection={"column"} padding={"50px"} justifyContent={"center"} alignItems={"center"} bgcolor={"white"} width={"35rem"} >
            <Typography variant='h2'>Payment on delivery.</Typography>
            <Box width={"100%"}>
                <TextField value={name} label="Customer name" placeholder="Name" color="info" focused fullWidth onChange={(e)=>setName(e.target.value)} />
            </Box>
            <Box width={"100%"}>
                <TextField value={phone} label="Phone" placeholder="+2 XXX XXX XX" type={"tel"}  color="info" focused fullWidth onChange={(e)=>setPhone(e.target.value)} />
            </Box>
            <Box width={"100%"}>
                <TextField
                    placeholder="Address"
                    value={address}
                    color='info'
                    multiline
                    rows={2}
                    maxRows={4}
                    focused
                    fullWidth
                    onChange={(e)=>setAddress(e.target.value)}
                    />
            </Box>
            <Button variant='contained' disableElevation onClick={()=>handleClick()} >Order</Button>
        </Box>
    </Box>
  )
}

export default CashDetailedModal