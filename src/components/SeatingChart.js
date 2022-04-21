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

    let number = Math.floor(100000 + Math.random() * 900000);
    return(
        
        
        <div class="container-restaurant">
            <h1 style={{textAlign: 'center' }} ></h1>
            <ul>
                <div class = "square" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 1</li></div>
                <li  table1 style={{textAlign: 'left'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li> 
            </ul>
            <ul>
                <div class = "square" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 2</li></div>
                <li  table1 style={{textAlign: 'left'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li> 
            </ul>
            <ul>
                <div class = "square" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 3</li></div>
                <li  table1 style={{textAlign: 'left'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li>  
            </ul>
            <ul>
                <div class = "square" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <li style={{textAlign: 'center'}}>Table 4</li></div>
                <li  table1 style={{textAlign: 'left'}}><button onClick={() =>setButtonPopup(true)}>SELECT</button></li>  
            </ul>
            <ul>
            <li><button onClick={() =>(navigate("/"))}>Back </button></li>
 
            </ul>
            <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
                <p> Your confirmation code to present to the host is:  {number}</p>
                
            </Popup>
        </div>
     
     );
}

export default SeatingChart;