import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom' 

const Cart=()=>{
    const cartData=useSelector((e)=>e.cartData)
    return(<>
    <Link to="/" >go back to home</Link>
    <h1>{cartData.map((e)=>{
        return <li>{e}</li>
    })}</h1>
     </>)
}
export default Cart