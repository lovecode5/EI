import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Register} from "./Components/Register"
import {Login} from "./Components/Login"
import {Profile} from "./Components/Profile"
import {Navigation} from "./Navigation/Navbar"


function App() {
  return (
    <div className="App">
      <header>
        <Navigation></Navigation>
      </header>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>


      </Routes>
      
    </div>
  );
}

export default App;
