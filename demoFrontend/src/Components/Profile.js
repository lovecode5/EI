import axios from "axios";

export const Profile=({token})=>{
    console.log("token","token",token)
    let data;
    async function getUserProfile(){
        const auth={
            headers:{
                authorization:token
            }
        }
        data=await axios.get("http://localhost:5000/api/profile",auth)

    }

    return(
        <div>
            <button onClick={getUserProfile}>Profile</button>
            {data}
        </div>
    )

}