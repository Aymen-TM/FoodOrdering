import { Button, Typography } from '@mui/material'
import React from 'react'

const NavBarLink = ({title}) => {
  return (
    <Button color={"neutral"} variant="text"><Typography fontWeight={"bold"} variant='h4'>{title}</Typography></Button>
  )
}

export default NavBarLink