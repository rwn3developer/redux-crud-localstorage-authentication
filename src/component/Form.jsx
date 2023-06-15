import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddUser,DeleteUser } from "../redux/action/action";
import { Link, useNavigate } from "react-router-dom";

const Form  = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allData = useSelector(state => state.crudUser.userList);
    const [input,setInput] = useState({
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
        let obj = {
            id : Math.floor(Math.random() * 10000),
            name : input.name,
            email : input.email,
            password : input.password
        }
       dispatch(AddUser(obj))
       setInput({
            name : '',
            email : '',
            password : ''
       })
    }

    const deleteData = (id) => {
            dispatch(DeleteUser(id))
    }

    useEffect(()=>{
        let chekUserLogin = localStorage.getItem('checkUserLogin');
        if(!chekUserLogin){
            navigate('/');
        }
    },[])
    
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

            <table border={1}>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Action</td>

                    </tr>


                    {
                        allData.map((val)=>{
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>
                                        <button onClick={ () => deleteData(val.id) }>Delete</button> || 
                                        <Link to={`/edit/${val.id}`}><button>Edit</button></Link>
                                        

                                    </td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

       </center>
    )
}

export default Form