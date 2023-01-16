import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'
import { Container } from '@mui/system'
import Image from 'next/image'
import React, { useState } from 'react'
import { arrowL,arrowR,pizza1,pizza2 } from '../public/img/index'
import {ArrowContainer} from '../styles/Styled'




const Featured = () => {
  const features = [pizza1,pizza2]
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
       }}>
        <Box  height={"20%"} width={"10%"} position={"absolute"} top={0} bottom={0} left={0} zIndex={2}  margin={"auto"} sx={{cursor:"pointer"}} onClick={()=>handleClick()}   >
            <Image src={arrowL} fill style={{objectFit:"contain"}}  alt='arrowLeft'  />
        </Box>

        <Box width={'300vw'} height={"100%"} display={"flex"} sx={{transform:`translateX(${-100*imageIndex}vw)`,transition:'all 0.4s ease'}} >
          {
            features.map((img,index)=>(
              <Box height={"100%"} width={"100vw"} position={"relative"} key={index}>
                <Image src={img} alt={"pizza"} fill style={{objectFit:"cover"}}  />
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