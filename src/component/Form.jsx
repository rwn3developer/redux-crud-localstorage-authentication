import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddUser } from "../redux/action/action";

const Form  = () => {

    const dispatch = useDispatch();

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
       dispatch(AddUser(input))
    }

    return (
       <center>
            <h1>User Register</h1>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" name="name" onChange={ (e) => handleChange(e) }/></td>
                    </tr>
                    <tr>
                        <td>Email :- </td>
                        <td><input type="text" name="email" onChange={ (e) => handleChange(e) }/></td>
                    </tr>
                    <tr>
                        <td>Password :- </td>
                        <td><input type="text" name="password" onChange={ (e) => handleChange(e) }/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" onClick={ () => save() } value="submit"/></td>
                    </tr>
                </tbody>
            </table><br></br>

            <table border={1}>
                
            </table>

       </center>
    )
}

export default Form