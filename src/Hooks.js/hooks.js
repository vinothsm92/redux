import axios from "axios"
import { memo, useCallback, useEffect, useMemo, useState } from "react"
function Login() {
    const [user, setuser] = useState([]);
    const [findName, setfindName] = useState("");
    const [bool, setBool] = useState(true);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {setuser(response.data);  })
    }, [])
    const filterData = useMemo(() => user.filter((e) => { 
        if (findName == "") {
            return true;
        }else {
            return e.username === findName;
        }
    }), [bool, user]);
    const onchange = useCallback((e) => {
        setfindName(e.target.value);
    }, []);
    return (<>
        <input type="text" value={findName} onChange={onchange} />  <br />
        <button onClick={() => setBool(!bool)}>Search</button>
        <button onClick={() => {
               setfindName('')
            setBool(!bool);
        }}>Clear</button>
        <table border="1">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {filterData.map((e, i) => {
                return <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                </tr>
            })}</table>

    </>)
}
export default memo(Login)