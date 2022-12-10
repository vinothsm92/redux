import { ADD_TO_CART, EMPTY_CART, REMOVE_CART } from "./constant"

export const addToCart=(data)=>{
    console.warn("action called",data)
return {
    type:ADD_TO_CART,
    data
}
}
export const removeCart=(data)=>{
    console.warn("action called",data)
return {
    type:REMOVE_CART,data
}
}
export const emptyCart=()=>{
    console.warn("action called")
return {
    type:EMPTY_CART,
    data:[]
  
}
}