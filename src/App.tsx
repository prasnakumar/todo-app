import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './app/Component/Sign-in/Signin'
import SignUp from './app/Component/Sign-in/SignUp'
import Home from './app/Component/Home-Component/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="*" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
