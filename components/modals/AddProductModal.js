import { Badge, Box, Button, InputAdornment, TextField, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useRouter } from 'next/router';

const AddProductModal = ({pizzaId,pizzaIndex,pizza,action,close,setClose}) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null);


    const wrapper=useRef(null)
    const route = useRouter()
    const theme = useTheme()

    useEffect(() => {
      if(action=="Update"){
        setTitle(pizza.title)
        setDesc(pizza.desc)
        setPrices([...pizza.prices])
        setExtraOptions([...pizza.extraOptions])
      }
    }, [])
    



    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
      };
    const handleAddExtra = () => {
        setExtraOptions((prev) => [...prev, extra]);
      };
    const handleRemoveExtra = (elementIndex) => {
        setExtraOptions((prev) => prev.filter((extra,index)=>index != elementIndex));
      };

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };

    const handleEditProduct = async (id) => {
      const data = new FormData();
      const UpdatedProduct = {
        title,
        desc,
        prices,
        extraOptions,
      };
      try {
        if(file){
          data.append("file", file);
          data.append("upload_preset", "uploads");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dtoxyjigl/image/upload",
            data
          );
          const { url } = uploadRes.data;
          UpdatedProduct.img = url
        }
        const res = await axios.patch(
          "http://localhost:3000/api/products/" + id,
          UpdatedProduct
        );
        route.reload(window.location.pathname)
        
      } catch (err) {
        console.log(err);
      }
    };

    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dtoxyjigl/image/upload",
            data
          );
    
          const { url } = await uploadRes.data;
          const newProduct = {
            title,
            desc,
            prices,
            extraOptions,
            img: url,
          };
         
    
        await axios.post("http://localhost:3000/api/products", newProduct);
        route.reload(window.location.pathname)
        } catch (err) {
          console.log(err);
        }
      };

    const handlClickOut =(e)=>{
      if(e.target == wrapper.current){
        setClose(!close)
      }
    }

    const handlAction = ()=>{
      if(action =="Create"){
        handleCreate()
      }else{
        handleEditProduct(pizzaId,pizzaIndex)
      }
    }

  return (
    <Box position={"absolute"} display={"flex"} ref={wrapper}  justifyContent={"center"} alignItems={"center"} zIndex={1}  bgcolor={"rgba(197, 197, 197, 0.568)"} top={0} left={0} height={'100%'} width={"100%"} onClick={(e)=>handlClickOut(e)}>
        <Box display={"flex"}  gap={2} borderRadius={"20px"} flexDirection={"column"} padding={"50px"} justifyContent={"center"} alignItems={"center"} bgcolor={"white"} width={"35rem"} >
            <Button startIcon={<CloseIcon />} onClick={()=>setClose(!close)} />
            <Typography variant='h2'>{action=="Create"?"Add Product":"Update Product"}</Typography>
            <Box width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} gap={1}>
                <TextField hidden onChange={(e)=>setFile(e.target.files[0])} type={"file"} label="Image" placeholder="Image" color="info" focused fullWidth />
            </Box>
            <Box width={"100%"}>
                <TextField value={title} onChange={(e)=>setTitle(e.target.value)} label="Title" placeholder="Title" color="info" focused fullWidth />
            </Box>
            <Box width={"100%"}>
                <TextField
                    label="Desc"
                    placeholder="Desc"
                    value={desc}
                    color='info'
                    multiline
                    rows={2}
                    maxRows={4}
                    focused
                    fullWidth
                    onChange={(e)=>setDesc(e.target.value)}
                    />
            </Box>
            <Box width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={1}>
                <TextField  InputProps={{startAdornment: (<InputAdornment position="start"><AttachMoneyIcon /></InputAdornment>),}}  onChange={(e)=>changePrice(e,0)} label="Small" placeholder="Small" type={"number"}  color="info" focused  />
                <TextField  InputProps={{startAdornment: (<InputAdornment position="start"><AttachMoneyIcon /></InputAdornment>),}}  onChange={(e)=>changePrice(e,1)} label="Medium" placeholder="Medium" type={"number"}  color="info" focused   />
                <TextField  InputProps={{startAdornment: (<InputAdornment position="start"><AttachMoneyIcon /></InputAdornment>),}}  onChange={(e)=>changePrice(e,2)} label="Large" placeholder="Large" type={"number"}  color="info" focused  />
            </Box>
            <Box width={"100%"} display={"flex"} alignItems={"center"} gap={1}>
                <TextField  label="Extra Name" name='text' placeholder="Extra Name" type={"text"} onChange={(e)=>handleExtraInput(e)}  color="info" focused   />
                <TextField label="Extra Price" name='price' placeholder="Extra Price" type={"number"} onChange={(e)=>handleExtraInput(e)}  color="info" focused   />
                <Button variant='contained' disableElevation onClick={()=>handleAddExtra()} >Add Extra</Button>
            </Box>
            <Box maxWidth={"100%"} width={"100%"} display={"flex"} flexWrap={"wrap"}  alignItems={"center"} gap={1} >
                {
                    extraOptions.map((extra,index)=>(
                        <Box key={extra.text} mt={1} >
                            <Badge color='info' overlap='rectangular'  badgeContent={<Typography sx={{cursor:"pointer"}}>x</Typography>} onClick={()=>handleRemoveExtra(index)}>
                                <Typography  sx={{userSelect:"none"}} variant='p' color={"white"}  bgcolor={theme.palette.primary.main} padding={1} borderRadius={"5px"}>
                                    {extra.text} {extra.price}
                                </Typography>
                            </Badge>
                        </Box>
                    ))
                }
            </Box>
            <Button variant='contained' disableElevation onClick={()=>handlAction()} fullWidth>{action=="Create"?"Create Product":"Update Product"}</Button>
        </Box>
    </Box>
  )
}

export default AddProductModal