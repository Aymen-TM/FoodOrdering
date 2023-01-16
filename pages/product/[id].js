import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, useTheme } from '@mui/material';
import { height } from '@mui/system';
import Image from 'next/image';
import React, { useState } from 'react'
import SizeButton from '../../components/SizeButton';
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
    <Box height={{xs:"auto",md:"calc(100vh - 100px)"}} display={"flex"} flexDirection={{xs:"column",md:"row"}}>
        <Box height={"100%"} flex={1} display={"flex"} justifyContent="center" alignItems="center">
            <Box position={"relative"} height={"70%"} width={"70%"}>
                <Image src={product.img}  alt='pizza' fill style={{objectFit:"contain"}} />
            </Box>
        </Box>

        <Box height={"100%"} flex={1} padding="20px">
            <Typography variant='h1' fontWeight={"bold"}>{product.name}</Typography>
            <Typography variant='span' fontSize={"24px"} color={"#d1411e"} display={"block"} my={1}  >${product.price[size]}</Typography>
            <Typography  my={1} color={theme.palette.grey[800]}>{product.desc}</Typography>
            <Typography variant='h4' my={2}>Choose the size</Typography>

            <Box display={"flex"} width={"50%"} justifyContent="space-between" alignItems="center" >
                <SizeButton h={"30px"} w={"30px"} img={PizzaSize} title={"Small"} click={()=>setSize(0)} />
                <SizeButton h={"40px"} w={"40px"} img={PizzaSize} title={"Medium"} click={()=>setSize(1)} />
                <SizeButton h={"50px"} w={"50px"} img={PizzaSize} title={"Large"} click={()=>setSize(2)} />
            </Box>

            <Typography variant='h4' my={2}>Choose additional ingredients</Typography>

            <Box display={"flex"}  justifyContent="space-between" alignItems="center" >
                <FormControlLabel control={<Checkbox value={"Double Ingredients"}  />} label="Double Ingredients" />
                <FormControlLabel control={<Checkbox value={"Extra Cheese"} />} label="Extra Cheese" />
                <FormControlLabel control={<Checkbox value={"Spicy Sauce"}/>} label="Spicy Sauce" />
                <FormControlLabel control={<Checkbox value={"Garlic Sauce"}/>} label="Garlic Sauce" />
            </Box>
            <Box mt={2} display={"flex"} gap={1}>
                <Box width={"100px"} > 
                    <TextField variant="outlined" type={"number"} defaultValue={1}  />
                </Box>
                <Button  variant="contained" disableElevation  >Add to Cart</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Product