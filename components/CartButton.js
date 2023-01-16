import { Badge, IconButton, Typography, useTheme } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'

const CartButton = () => {
    const theme = useTheme()
  return (
    <IconButton >
        <Badge badgeContent={<Typography color={theme.palette.primary.main} fontWeight={"bold"} variant='h6'>4</Typography>} variant="standard" color='secondary'  overlap="circular">
        <ShoppingCartOutlinedIcon sx={{height:40,width:40}} color='secondary'  />
        </Badge>
    </IconButton>
  )
}

export default CartButton