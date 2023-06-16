import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../redux/action/action";
import { useNavigate,Link } from "react-router-dom";



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
        setInput({
            email :'',
            password : ''
        })
    }

   
    useEffect(()=>{
        let chekUserLogin = localStorage.getItem('checkUserLogin');
        if(checkUser == 10){
            alert("Email and Password not vaid") 
        }else{
            if(chekUserLogin){
                navigate('/dashboard');
            }
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

            <Link to={`/`}><button>Register</button></Link>
        </center>
    )
}

export default Login;