import { Box, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PizzaCard = ({pizza}) => {
    const theme = useTheme()
  return (
    <Box sx={{cursor:"pointer"}} height={300} display={"flex"} flex={1} flexBasis={"22%"} gap={2}  flexDirection={"column"}  alignItems={"center"} mt={5} >
        <Box>
          <Link href={`http://localhost:3000/product/${pizza._id}`}>
            <Image src={pizza.img} alt="pizza" height={150} width={150} />
          </Link>
        </Box>
          <Typography variant='h4' color={theme.palette.primary.main}  fontWeight={"bold"} >{pizza.title}</Typography>
          <Typography variant='p' color={theme.palette.grey[700]}  fontWeight={"bold"} >${pizza.prices[0]}</Typography>
          <Typography variant='p' color={theme.palette.grey[600]} textAlign={"center"}  lineHeight={"28px"}  >{pizza.desc}</Typography>
    </Box>
  )
}

export default PizzaCard