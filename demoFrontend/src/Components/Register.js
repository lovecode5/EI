import { useState } from "react";
import axios from 'axios';


export const Register=()=>{
    const [input,setInput]=useState({username:"",email:"",password:""})

    function username(event){
        setInput({
            ...input,
            username:event.target.value
        })
    }
    function password(event){
        setInput({
            ...input,
            password:event.target.value
        })
    }
    function email(event){
        setInput({
            ...input,
            email:event.target.value
        })
    }
    async function submitUserInput(){
        console.log("input","input",input)
        const data=await axios.post("http://localhost:5000/api/register",input)
        if(data.status===200){
            alert("Registered successfully")
        }
        setInput({username:"",email:"",password:""})



    }
    return (
        <div>
            <label for="username">UserName</label>
            <input type="text" onChange={username} value={input.username}></input>
            <label for="password">Password</label>
            <input type="text" onChange={password} value={input.password}></input>
            <label for="email">Email</label>
            <input type="text" onChange={email} value={input.email}></input>
            <button onClick={submitUserInput}>Submit</button>
        </div>

        
    )

    



}