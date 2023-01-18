import { Badge, IconButton, Typography, useTheme } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import Link from 'next/link';

const CartButton = ({quantity}) => {
    const theme = useTheme()   
   
  return (
      <Link href={"http://localhost:3000/Cart"}>
        <IconButton >
          <Badge badgeContent={<Typography color={theme.palette.primary.main} fontWeight={"bold"} variant='h6'>{quantity}</Typography>} variant="standard" color='secondary'  overlap="circular">
          <ShoppingCartOutlinedIcon sx={{height:40,width:40}} color='secondary'  />
          </Badge>
        </IconButton>
      </Link>
  )
}

export default CartButton