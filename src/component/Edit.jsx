import { useNavigate, useParams } from "react-router-dom"
import { FetchUser,UpdateUser } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Edit = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();
    const singleUser = useSelector(state => state.crudUser.singleUser); 
    const [input,setInput] = useState({
        id : '',
        name : '',
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
        dispatch(UpdateUser(input)); 
        navigate('/');
    }
    
    // useEffect(()=>{
    //     dispatch(FetchUser(id));  
    // },[id])

    useEffect(()=>{
        dispatch(FetchUser(id));  
        if(singleUser){
            setInput(singleUser)
        }
    },[singleUser,id])

    return (
        <center>
            <h1>User Register</h1>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" value={input.name} name="name" onChange={ (e) => handleChange(e) }/></td>
                    </tr>
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

export default Edit