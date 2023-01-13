import { Badge, Box, Button, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {logo, telephone} from '../public/img/index'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Container } from '@mui/system';
import NavBarLink from './NavBarLink';

const NavBar = () => {
  const isNotMobileScreen = useMediaQuery("(min-width:1000px)")
  const theme = useTheme()
  return (
       <Container maxWidth="xl" sx={{
        display:"flex",
        alignItems:"center",
        padding:"0 50px",
        height:"100px",
        bgcolor:theme.palette.primary.main
       }}>
      <Box display={"flex"}  alignItems={"center"} flex={{md:1}} gap={2}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={48} width={48} borderRadius={"999999px"} bgcolor={theme.palette.background.default}>
          <Image src={telephone} height={"32"} width={"32"} />
        </Box>
        <Stack gap={0.5}>
          <Typography variant='p' fontWeight={"semibold"} fontSize={"15px"} color={"white"} textTransform={"uppercase"}>order now!</Typography>
          <Typography  variant='h4'color={"white"} fontWeight={"bold"} textTransform={"uppercase"}>07 91 70 73 00</Typography>
        </Stack>
      </Box>
      {isNotMobileScreen &&
      <Stack flex={1} flexDirection={"row"} alignItems={"center"}  >
        <NavBarLink title={"Home"} />
        <NavBarLink title={"Products"} />
        <NavBarLink title={"Menu"} />
          <Box>
            <Image src={logo} height={72} />
          </Box>
          <NavBarLink title={"Events"} />
          <NavBarLink title={"Blog"} />
          <NavBarLink title={"Contact"} />
      </Stack>
      }

      <Box display={"flex"} flex={1}  justifyContent={"end"}>
        <IconButton >
          <Badge badgeContent={<Typography color={theme.palette.primary.main} fontWeight={"bold"} variant='h6'>4</Typography>} variant="standard" color='secondary'  overlap="circular">
            <ShoppingCartOutlinedIcon sx={{height:40,width:40}} color='secondary'  />
          </Badge>
        </IconButton>
      </Box>
      </Container>
  )
}

export default NavBar