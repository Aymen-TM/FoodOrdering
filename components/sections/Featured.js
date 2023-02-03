import { Box, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { arrowL,arrowR,featured,featured2,featured3 } from '../../public/img/index'



const Featured = () => {
  const features = [featured,featured2,featured3]
  const theme = useTheme()
  const [imageIndex, setImageIndex] = useState(0)

  const handleClick =()=>{
    let featuresLen = features.length;
    setImageIndex((imageIndex + 1)% featuresLen)
  }

  return (
    <Box sx={{
        height:"calc(100vh - 100px)",
        position:"relative",
       }}
       bgcolor={theme.palette.grey[900]}
       >
        <Box  height={"20%"} width={"10%"} position={"absolute"} top={0} bottom={0} left={0} zIndex={2}  margin={"auto"} sx={{cursor:"pointer"}} onClick={()=>handleClick()}   >
            <Image src={arrowL} fill style={{objectFit:"contain"}}  alt='arrowLeft'  />
        </Box>

        <Box width={'300vw'} height={"100%"} display={"flex"} sx={{transform:`translateX(${-100*imageIndex}vw)`,transition:'all 0.4s ease'}} >
          {
            features.map((img,index)=>(
              <Box height={"100%"} width={"100vw"} position={"relative"} key={img}>
                <Image src={img} alt={"pizza"} fill style={{objectFit:"contain"}}  />
              </Box>
            ))
          }
        </Box>

        <Box onClick={()=>handleClick()} sx={{cursor:"pointer"}} zIndex={2} position={"absolute"} top={0} bottom={0} right={0} margin={"auto"} height={"20%"} width={"10%"}>
          <Image src={arrowR} fill style={{objectFit:"contain"}} alt='arrowRight' />
        </Box>

        

    </Box>
  )
}

export default Featured