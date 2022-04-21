import React from "react";
import { useNavigate } from "react-router-dom";
import "../login.css"

function Login(){
    let navigate = useNavigate();
    return(
        <div className="container-login">
            <header style={{textAlign: 'center'}}>Employee Login Page!</header>
            
            <ul>
                <li>
                <label   textAlign = 'center'>
                    Username:
                     <input type="text" name="name"/>
                </label>
                <input type="submit" value="Submit" />
                </li>

                
                 <li><label>
                    Password:
                     <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" /></li>

                <li><label>
                    Restaurant ID:
                     <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" /></li>
                <li style={{textAlign: 'center'}}><button>Login</button></li> 


                <li style={{textAlign: 'left'}}><button onClick={() =>(navigate("/"))}>Back </button></li>
                 
                 
            </ul>
         
            
        </div>
    )
}

export default Login