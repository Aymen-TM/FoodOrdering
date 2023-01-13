import { Box, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { pizza } from '../public/img/index' 

const PizzaCard = () => {
    const theme = useTheme()
  return (
    <Box display={"flex"} flex={1} flexBasis={"22%"} gap={2}  flexDirection={"column"} justifyContent={"center"} alignItems={"center"} mt={5} >
        <Image src={pizza} alt="pizza" height={150} width={150} />
        <Typography variant='h4' fontSize={"18px"}  color={"#d1411e"} lineHeight={"28px"} fontWeight={"bold"} >FIORA DI ZUCCA</Typography>
        <Typography variant='h4' color={"#666"} lineHeight={"28px"} fontWeight={"bold"} >$19.90</Typography>
        <Typography variant='h5' textAlign={"center"}  color={"#444"} lineHeight={"28px"}  >Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
    </Box>
  )
}

export default PizzaCard