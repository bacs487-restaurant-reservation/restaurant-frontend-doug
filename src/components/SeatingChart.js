import React from "react"
import { useNavigate } from "react-router-dom";
import "../seatingchart.css"
import Popup from "./Popup";
import { useState } from "react";
import Search from "../Search";

function SeatingChart(){
    let navigate = useNavigate();

    const[buttonPopup, setButtonPopup] = useState(false)

    const codeGenerator = () =>{
        window.alert()
    }

    const tableCount = () =>{
        let maxTableCounter = 0;
        maxTableCounter ++;
        
        
    }

    let number = Math.floor(100000 + Math.random() * 900000);
    return(
        
        
        <div class="container-restaurant">
            <h1 style={{textAlign: 'center' }} ></h1>
            <table class = "centerTable">
                <tr>
                    <td>
                        <ul>
                            <div class = "square" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 1</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li> 
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <div class = "circle" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 2</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li> 
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <div class = "circle" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 3</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li> 
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <div class = "square" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 4</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li> 
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <div class = "square" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 5</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li>  
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <div class = "circle" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 6</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li>  
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <div class = "circle" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 7</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li>  
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <div class = "square" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 8</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li>  
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <div class = "square" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 9</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li>  
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <div class = "circle" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 10</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li>  
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <div class = "circle" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 11</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li>  
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <div class = "square" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 12</li></div>
                            <li  table1 style={{textAlign: 'center'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li>  
                        </ul>
                    </td>
                </tr>
            </table>
            <ul>
            <li><button onClick={() =>(navigate("/"))}>Back </button></li>
 
            </ul>
            <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
                <p className = "popup-text"> Your confirmation code to present to the host is:  {number}</p>
                
            </Popup>
        </div>
     
     );
}

export default SeatingChart;