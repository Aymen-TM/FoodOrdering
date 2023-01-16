import { Badge, Box, Button, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {logo, telephone} from '../public/img/index'
import NavBarLink from './NavBarLink';
import { NavBarContainer } from '../styles/Styled';
import CartButton from './CartButton';
import CircleImage from './CircleImage';

const NavBar = () => {
  const isNotMobileScreen = useMediaQuery("(min-width:1000px)")
  const theme = useTheme()
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
        <NavBarLink title={"Home"} />
        <NavBarLink title={"Products"} />
        <NavBarLink title={"Menu"} />
          <Box>
            <Image src={logo} height={72} alt='logo' />
          </Box>
          <NavBarLink title={"Events"} />
          <NavBarLink title={"Blog"} />
          <NavBarLink title={"Contact"} />
      </Stack>
      }

      <Box display={"flex"} flex={1}  justifyContent={"end"}>
        <CartButton />
      </Box>

      </NavBarContainer>
  )
}

export default NavBar