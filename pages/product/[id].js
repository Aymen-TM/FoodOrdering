import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, useTheme } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import SizeButton from '../../components/SizeButton';
import {PizzaSize } from '../../public/img/index'
import { addNewProduct } from '../../redux/cartSlice';

const Product = ({pizza}) => {
    const theme = useTheme()
    const dispatch = useDispatch() 

    const [size, setSize] = useState(0)
    const [price, setPrice] = useState(pizza.prices[size]);
    const [extras, setExtras] = useState([])
    const [quantity, setQuantity] = useState(1)
    const pizzaSize = ["Small","Medium","Large"]

    const product ={
        id:pizza._id,
        title:pizza.title,
        img:pizza.img,
        price:price,
        size:size,
        quantity:quantity,
        desc:pizza.desc,
        options:extras,
        totalPrice:price*quantity
    }

    const addProduct = ()=>{
      dispatch(addNewProduct({product}))
    }

    const changePrice= (number)=>{
        setPrice(price + number)
    }

    const handlSize =(sizeIndex)=>{
        const diff = pizza.prices[sizeIndex] - pizza.prices[size]
        setSize(sizeIndex)
        changePrice(diff)
    }

    const handlChange=(e,option)=>{
        const checked = e.target.checked
        if(checked){
            changePrice(option.price)
            setExtras(prev=>[...prev,option])
        }else{
            changePrice(-option.price)
            setExtras(extras.filter((extra)=>extra._id!=option._id))
        }
    }



  return (
    <Box height={{xs:"auto",md:"calc(100vh - 100px)"}} display={"flex"} flexDirection={{xs:"column",sm:"row"}}>
        <Box height={"100%"} flex={1} display={"flex"} justifyContent="center" alignItems="center">
                <Box padding={2}>
                    <Image src={pizza.img}  alt='pizza' height={300} width={300}  style={{objectFit:"contain"}} />
                </Box>
        </Box>

        <Box height={"100%"} flex={1} padding="20px" display={"flex"} flexDirection={"column"} justifyContent="center" >
            <Typography variant='h1' fontWeight={"bold"}>{pizza.title}</Typography>
            <Typography variant='span' fontSize={"24px"} color={"#d1411e"} display={"block"} my={1}  >${parseFloat(price.toFixed(2))}</Typography>
            <Typography  my={1} color={theme.palette.grey[800]}>{pizza.desc}</Typography>
            <Typography variant='h4' my={2}>Choose the size</Typography>

            <Box display={"flex"} width={"50%"} justifyContent="space-between" alignItems="center" >
                {
                    pizza.prices.map((price,index)=>(
                        <SizeButton h={`${30+(index*10)}px`} w={`${30+(index*10)}px`} img={PizzaSize} title={pizzaSize[index]} click={()=>handlSize(index)} />
                    ))
                }
            </Box>

            <Typography variant='h4' my={2}>Choose additional ingredients</Typography>

            <Box display={"flex"} gap={2} alignItems="center" >
                {
                    pizza.extraOptions.map((extra)=>(
                        <FormControlLabel key={extra._id} control={<Checkbox value={extra.text} onChange={(e)=>handlChange(e,extra)} />} label={extra.text} />
                    ))
                }
            </Box>
            <Box mt={2} display={"flex"} gap={1}>
                <Box width={"100px"} > 
                    <TextField variant="outlined" type={"number"} defaultValue={quantity} onChange={(e)=>setQuantity(e.target.value)}  />
                </Box>
                <Button  variant="contained" disableElevation onClick={addProduct}  >Add to Cart</Button>
            </Box>
        </Box>
    </Box>
  )
}

export const getServerSideProps = async ({params})=>{
    const response = await axios.get(`http://localhost:3000/api/products/${params.id}`)
    return{
      props:{
        pizza:response.data,
      } 
    }
  }

export default Product