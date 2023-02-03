import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { PizzaListContainer } from '../../styles/Styled'

import PizzaCard from '../PizzaCard'

const PizzaList = ({pizzaList}) => {
    const theme = useTheme()
  return (
    <PizzaListContainer>
        <Typography variant='h2' textAlign={"center"} textTransform={"uppercase"} marginBottom={3} fontWeight={"bold"} >the best pizza in town</Typography>
        <Typography variant='h3' textAlign={"center"} width={"70%"}  color={theme.palette.grey[700]}  fontWeight={"semibold"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie.</Typography>

        <Box display={"flex"} gap={5}  justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"} >
          {
            pizzaList.map((pizza)=>(
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))
          }
        </Box>
    </PizzaListContainer>
  )
}

export default PizzaList