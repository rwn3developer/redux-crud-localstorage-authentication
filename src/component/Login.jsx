import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../redux/action/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const checkUser = useSelector(state => state.crudUser.status);
   
    

    const [input,setInput] = useState({
        email : '',
        password : ''
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input,[name] : value
        })
    }

    const save = () => {
        dispatch(UserLogin(input))
    }

    useEffect(()=>{
        let chekUserLogin = localStorage.getItem('checkUserLogin');
        if(chekUserLogin){
            navigate('/form');
        }
    },[checkUser])

    return (
        <center>
            <h1>User Register</h1>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>Email :- </td>
                        <td><input type="text" value={input.email} name="email" onChange={ (e) => handleChange(e) }/></td>
                    </tr>
                    <tr>
                        <td>Password :- </td>
                        <td><input type="text" value={input.password} name="password" onChange={ (e) => handleChange(e) }/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" onClick={ () => save() } value="submit"/></td>
                    </tr>
                </tbody>
            </table><br></br>
        </center>
    )
}

export default Login;