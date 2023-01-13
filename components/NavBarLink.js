import { Button, Typography } from '@mui/material'
import React from 'react'

const NavBarLink = ({title}) => {
  return (
    <Button color={"secondary"} variant="text"><Typography fontWeight={"bold"} variant='h6'>{title}</Typography></Button>
  )
}

export default NavBarLink