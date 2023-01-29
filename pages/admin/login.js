import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const router = useRouter()

    const handlSignIn =async ()=>{
        try {
            const res = await axios.post("http://localhost:3000/api/login",{
                username:userName,
                password:password
            })
            if(res.status == 200){
                router.push('/admin')
            }        
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }
  return (
    <Box display={"flex"}  justifyContent={"center"} alignItems={"center"} height={"100vh"}   >
        <Box display={"flex"} flexDirection={"column"} gap={2} height={"50%"}>
            <Typography variant='h2' textAlign={"center"}>Admin Dashboard</Typography>
            <TextField id="outlined-basic" color='info' label="UserName" variant="outlined" onChange={(e)=>setUserName(e.target.value)} />
            <TextField id="outlined-basic" type={"password"} color='info' label="Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)} />
            <Button variant="contained" color='success' onClick={()=>handlSignIn()}>Sign in</Button>
            <Typography variant='p' color="red" display={error?"block":"none"}>Wrong Credantial</Typography>
        </Box>
    </Box>
  )
}

export default Login