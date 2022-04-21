import React from "react";
import './App.css';
import './login.css';
import Search from "./Search";
import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EmployeeButton from "./components/EmployeeButton";
function App(){
  return(
  <Router>
          <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/employeebutton" element={<EmployeeButton />} />
          </Routes>
      </Router>
  )
}

export default App;
