import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        orderQuantity:0,
        total:0
    },
    reducers:{
        addNewProduct:(state,action)=>{
            state.products.push(action.payload.product)
            state.orderQuantity +=1
            state.total = state.products.reduce((accumulator, currentValue) => accumulator + currentValue.totalPrice,0)
        },
        reset:(state)=>{
            state.products = []
            state.orderQuantity =0
            state.total = 0
        }
    }
})

export const {addNewProduct,reset} = cartSlice.actions

export default cartSlice.reducer