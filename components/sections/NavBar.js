import {Box ,Button,Link,Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import {telephone} from '../../public/img/index'
import { NavBarContainer } from '../../styles/Styled';
import CartButton from '../CartButton';
import CircleImage from '../CircleImage';
import {useSelector } from 'react-redux';
import { useRouter } from 'next/router';



const NavBar = () => {
  const isNotMobileScreen = useMediaQuery("(min-width:1000px)")
  const theme = useTheme()
  const orderQuantity = useSelector((state)=>state.cart.orderQuantity)
  const router = useRouter()
  
  return (
       <NavBarContainer bg={theme.palette.primary.main}>
        
        <Box display={"flex"}  alignItems={"center"} flex={{md:1}} gap={2}>
          <CircleImage img={telephone} />
          <Stack gap={0.5}>
            <Typography variant='p' fontWeight={"semibold"} fontSize={"15px"} color={"white"} textTransform={"uppercase"}>order now!</Typography>
            <Typography  variant='h4'color={"white"} fontWeight={"bold"} textTransform={"uppercase"}>07 91 70 73 00</Typography>
          </Stack>
        </Box>

      {isNotMobileScreen &&
      <Stack flex={3} flexDirection={"row"} alignItems={"center"}  >
        <Button  color={"neutral"} sx={{fontSize:"15px"}} onClick={()=>router.push('/')} >Home</Button>
        <Button color={"neutral"} sx={{fontSize:"15px"}} onClick={()=>router.push('/')} >Products</Button>
        <Button color={"neutral"} sx={{fontSize:"15px"}} onClick={()=>router.push('/')} >Menu</Button>
        <Button color={"neutral"} sx={{fontSize:"15px"}} onClick={()=>router.push('/')} >Events</Button>
        <Button color={"neutral"} sx={{fontSize:"15px"}} onClick={()=>router.push('/')} >Blog</Button>
        <Button color={"neutral"} sx={{fontSize:"15px"}} onClick={()=>router.push('/')} >Contaict</Button>


      </Stack>
      }

      <Box display={"flex"} flex={1}  justifyContent={"end"}>
        <CartButton quantity={orderQuantity}/>
      </Box>

      </NavBarContainer>
  )
}

export default NavBar