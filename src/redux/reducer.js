import { ADD_TO_CART, EMPTY_CART, REMOVE_CART } from "./constant"

export const cartData=(data=[],action)=>{
  
    switch(action.type){
        case ADD_TO_CART:
            console.log("add to cart reducer called",action)
            return [action.data,...data]
            case REMOVE_CART:debugger
                console.log("remove cart reducer called",action)
              const remainingData=data.filter((e,i)=> i !==action.data)
                return [...remainingData]
                case EMPTY_CART:
                    console.log(" empty cart reducer called",action)
                    data=[]
                    return [...data]
            default:
                return data
    }
}