import React from "react";
import { useNavigate } from "react-router-dom";
import "../login.css"
import { useAuth0 } from "@auth0/auth0-react";

function Login(){
    let navigate = useNavigate();

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
                    <li style={{textAlign: 'left'}}>
                    <li><button onClick={() =>(navigate("/employeeseatingchart"))}>Login </button></li>
                    <li><button onClick={() =>(navigate("/"))}>Back </button></li>
                    </li>
                </ul>
            </div>
        </body>
    )
}

export default Login