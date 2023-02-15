import './App.css';
import React from 'react';
import Navbar from "./Navbar";
import Checkout from "./Checkout";
import Inicio from "./inicio";
import About from "./About"
import { BottomNavigation } from '@mui/material';
import Typography from '@mui/material/Typography';

import {
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ verticalAlign:'middle', }} >
<Navbar/>

<Routes>
<Route path="/" element={<Inicio/>}/>
<Route path="/Checkout" element={<Checkout/>}/>
<Route path="/About" element={<About/>}/>
</Routes>
<BottomNavigation
  
>
<Typography variant="body2" gutterBottom>
        Cosas Bazar 2023
      </Typography>
</BottomNavigation>

    </div>
  );
}




export default App;
