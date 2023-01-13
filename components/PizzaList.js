import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'

import PizzaCard from './PizzaCard'

const PizzaList = () => {
    const theme = useTheme()
  return (
    <Container maxWidth="lg" sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        position:'sticky',
        top:0,
        padding:"20px 10px",
       }}>
        <Typography variant='h2' textAlign={"center"} textTransform={"uppercase"} marginBottom={5} fontWeight={"bold"} >the best pizza in town</Typography>
        <Typography variant='h4' textAlign={"center"} width={"70%"} fontSize={'24px'} color={theme.palette.grey[700]}  fontWeight={"semibold"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.</Typography>

        <Box display={"flex"} gap={5}  justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"} >
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </Box>
    </Container>
  )
}

export default PizzaList