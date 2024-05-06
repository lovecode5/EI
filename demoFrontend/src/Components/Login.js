import { useState } from "react";
import axios from 'axios';
import {Profile} from "./Profile"


export const Login=()=>{
    let userData;
    const [input,setInput]=useState({email:"",password:""})
    const [authorization,setAuthorization]=useState("")

    
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
        userData=await axios.post("http://localhost:5000/api/login",input)
        //console.log("userData1","userData1",userData.data.token)
        setAuthorization(userData.data.token)
        if(userData.status===200){
            alert("Logged In successfully")
        }
        setInput({email:"",password:""})


    }
    console.log("userData2","userData2",userData)

    return (
        <div>
            
            <label for="password">Password</label>
            <input type="text" onChange={password} value={input.password}></input>
            <label for="email">Email</label>
            <input type="email" onChange={email} value={input.email}></input>
            <button onClick={submitUserInput}>Submit</button>
            {authorization?<Profile token={authorization}></Profile>:""}
        </div>

        
    )

    



}