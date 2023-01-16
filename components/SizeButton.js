import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const SizeButton = ({img,h,w,click,title}) => {
  return (
    <Box onClick={()=>click()} height={h} width={w} position={"relative"} sx={{cursor:"pointer"}}>
        <Image src={img} alt='size' fill style={{objectFit:"contain"}} />
        <Typography variant='span' fontSize={"12px"} bgcolor={"teal"} borderRadius={"10px"}  color={"white"} padding={"0 5px"} position={"absolute"} top={'-5px'} right={"-20px"}>{title}</Typography>
    </Box>
  )
}

export default SizeButton