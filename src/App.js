import React from "react";
import './App.css';
import './login.css';
import Search from "./Search";
import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EmployeeButton from "./components/EmployeeButton";
import SeatingChart from "./components/SeatingChart";
import Popup from "./components/Popup";
function App(){
  return(
  <Router>
          <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/employeebutton" element={<EmployeeButton />} />
              <Route path="/seatingchart" element={<SeatingChart />}/>
          </Routes>
      </Router>
  )
}

export default App;
