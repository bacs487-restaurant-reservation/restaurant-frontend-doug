import React from "react";
import { useNavigate } from "react-router-dom";
import "../login.css"
import { useAuth0 } from "@auth0/auth0-react";

function Login(){
    let navigate = useNavigate();

    const LoginButton = () =>{
        const { loginWithRedirect } = useAuth0();

        return <button onClick={() => loginWithRedirect()}>Log In</button>;
    }

    return(
        <body>
            <div className="container-login">
                <header style={{textAlign: 'center'}}>Employee Login Page!</header>
            
                <ul>
                    <li>
                        <label   textAlign = 'left'>
                            Username:
                             <input type="text" name="name" />
                        </label>
                
                    </li>
                    <li>
                        <label textAlign = 'left'>
                            Password:
                             <input type="text" name="name" />
                        </label>
                    </li>
                    <li>
                        <input type="submit" value="Login" textAlign = 'center' />
                    </li>
                    <li style={{textAlign: 'left'}}>
                    <li><button onClick={() =>(navigate("/"))}>Back </button></li>
                    </li>
                </ul>
            </div>
        </body>
    )
}

export default Login