import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/productData";
  
const initialState={
    products:products, //products came from productdata
    cart:[], //user add cart data in this array
    netTotal:0,
}
const ProductSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        addToCart: (state, action) => {

            let index = state.cart.findIndex((item) => {
                return item.id === action.payload.id
            })

            if (index == -1) {
                let product = { ...action.payload, quantity: 1 }
                state.cart.push(product);
            } else {
                state.cart[index].quantity++;
            }
        },
        removeCart:(state,action)=>{
            state.cart=state.cart.filter((product)=>
                product.id!==action.payload);
            
        },
        incrementProduct:(state,action)=>{
            state.cart[action.payload].quantity+=1
            
        },
        decrementProduct:(state,action)=>{
          if  (state.cart[action.payload].quantity>1){
                state.cart[action.payload].quantity-=1;
                return;
            }
                state.cart.splice(action.payload,1);
            },
            
        getNetTotal:(state)=>{
            let netTotal=0;
            state.cart.map((item,index)=>{
                let total=item.price*item.quantity;
                netTotal+=total;
        })
        state.netTotal=netTotal;
    }
    }

})
export const {addToCart,removeCart,incrementProduct,decrementProduct,getNetTotal}=ProductSlice.actions;
export default ProductSlice.reducer;