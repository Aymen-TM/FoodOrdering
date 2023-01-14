import { Box, Container, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {bg} from '../public/img/index'

const Footer = () => {
  const theme = useTheme()
  return (
    <Box  sx={{
      display:"flex",
      backgroundColor:theme.palette.grey[900]
     }} height={{xs:'auto',md:"calc(100vh - 100px)"}}>
      <Box position={"relative"} display={{xs:"none",md:"flex"}} flex={1} >
        <Image src={bg} fill />
      </Box>

      <Box position={"relative"} display={"flex"} flexDirection={{xs:"column",sm:"row"}} gap={2} flexWrap='wrap' justifyContent='space-between' flex={2} padding={5}>
        <Box flex={1}>
          <Typography variant='h3' textTransform={"uppercase"} color={'#d3d3d3'} >
            oh yes we did.the lama pizza,well baked slice of pizza.
            </Typography>
        </Box>

        <Box display={"flex"} flexDirection={'column'} gap={2} flex={1}>
          <Typography variant='h5' color={"#b7903c"} textTransform={"uppercase"} fontWeight={"bold"}>
              find our restaurants
          </Typography>
          <Typography  color={'white'} >
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </Typography>
          <Typography  color={'white'}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </Typography>
          <Typography  color={'white'}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </Typography>
          <Typography  color={'white'}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </Typography>
        </Box>

        <Box  flex={1} display={"flex"} flexDirection={'column'} gap={2} >
          <Typography variant='h5' color={"#b7903c"} textTransform={"uppercase"} fontWeight={"bold"}>
              working hours 
          </Typography>
          <Typography color={'white'}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </Typography>
          <Typography color={'white'}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer