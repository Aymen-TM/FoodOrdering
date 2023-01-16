import { Box, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const CircleImage = ({img}) => {
    const theme = useTheme()
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={48} width={48} borderRadius={"999999px"} bgcolor={theme.palette.background.default}>
        <Image src={img} alt='phone' height={"32"} width={"32"} />
    </Box>
  )
}

export default CircleImage