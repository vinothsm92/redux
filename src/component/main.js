
import { addToCart } from '../redux/action'
import { removeCart } from '../redux/action'
import { emptyCart } from '../redux/action'
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction'
import { useSelector } from 'react-redux'
import {useEffect} from 'react';

function Main() {
    const dispatch = useDispatch()
    const data = useSelector((s) => s.productData)
    
      useEffect(()=>{     
        dispatch(productList())
      },[])
    return (
        <div>
            <div className='button'>
            <div >
                <button onClick={() => dispatch(emptyCart())}>empty cart</button>
            </div>
            <div >
                <button onClick={() => dispatch(productList())}>productlist call</button>
            </div>
            </div>
           <div className="listItem">
            {data.length === 0 ? [] : data[0].map((e) =>{
                return   <div><>{e.username}</><br/>
             <button onClick={()=>dispatch(addToCart(e.username))}>ADD</button>
             <button onClick={()=>dispatch(removeCart(e.id))}>DELETE</button>
             </div>
            })}
            </div>
        </div>
    );
}

export default Main; 