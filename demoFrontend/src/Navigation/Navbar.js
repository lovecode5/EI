import { Link } from 'react-router-dom';


export const Navigation=()=>{
    return (
        <ul>
            <li>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    )
}