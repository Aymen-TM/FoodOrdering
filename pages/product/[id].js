import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import { pizza,PizzaSize } from '../../public/img/index'

const Product = () => {
    const theme = useTheme()
    const product = {
        id: 1,
        img: pizza,
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
      };
      const [size, setSize] = useState(0);

  return (
    <Box height={"calc(100vh - 100px)"} display={"flex"}>
        <Box height={"100%"} flex={1} display={"flex"} justifyContent="center" alignItems="center">
            <Box position={"relative"} height={"80%"} width={"80%"}>
                <Image src={product.img}  alt='pizza' fill style={{objectFit:"contain"}} />
            </Box>
        </Box>

        <Box height={"100%"} flex={1} padding="20px">
        <Typography variant='h1' fontWeight={"bold"}>{product.name}</Typography>
        <Typography variant='span' fontSize={"24px"} color={"#d1411e"} display={"block"} my={1}  >${product.price[size]}</Typography>
        <Typography  my={1} color={theme.palette.grey[800]}>{product.desc}</Typography>
        <Typography variant='h3' my={2}>Choose the size</Typography>

        <Box display={"flex"} width={"40%"} justifyContent="space-between" alignItems="center" >
            <Box height={"30px"} width={"30px"} position={"relative"} sx={{cursor:"pointer"}}>
                <Image src={PizzaSize} alt='size' fill style={{objectFit:"contain"}} />
                <Typography variant='span' fontSize={"12px"} bgcolor={"teal"} borderRadius={"10px"}  color={"white"} padding={"0 5px"} position={"absolute"} top={'-5px'} right={"-20px"}>Small</Typography>
            </Box>
            <Box height={"40px"} width={"40px"} position={"relative"} sx={{cursor:"pointer"}}>
                <Image src={PizzaSize} alt='size' fill style={{objectFit:"contain"}} />
                <Typography variant='span' fontSize={"12px"} bgcolor={"teal"} borderRadius={"10px"}  color={"white"} padding={"0 5px"} position={"absolute"} top={'-5px'} right={"-20px"}>medium</Typography>
            </Box>
            <Box height={"50px"} width={"50px"} position={"relative"} sx={{cursor:"pointer"}}>
                <Image src={PizzaSize} alt='size' fill style={{objectFit:"contain"}} />
                <Typography variant='span' bgcolor={"teal"} borderRadius={"10px"} fontSize={"12px"}  color={"white"} padding={"0 5px"} position={"absolute"} top={'-5px'} right={"-20px"}>Large</Typography>
            </Box>
        </Box>


        </Box>
    </Box>
  )
}

export default Product