import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard  = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        let chekUserLogin = localStorage.getItem('checkUserLogin');
        if(!chekUserLogin){
            navigate('/');
        }
    },[])

    const logout = () => {
        localStorage.removeItem('checkUserLogin');
        navigate('/login');
    }

    return (
        <>
            <h1>Dashboard page</h1><br></br>
            <button onClick={ ()=>logout() }>Logout</button>
        </>
    )
}

export default Dashboard;