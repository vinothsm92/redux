import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { productSearch } from '../redux/productAction';
const Header=()=>{
    const result=useSelector((state)=>state.cartData)
    const dispatch=useDispatch();
    console.log("data in header",result)
    return (
        <div>
            <input type="text" onChange={(e)=>dispatch(productSearch(e.target.value))}></input>
        <Link to="/cart">
            <h1>  {result.length}</h1>
        </Link>
        </div>
    )
}
export default Header 