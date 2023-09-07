import React from 'react';
import './App.css';
import { Mynavbar } from './components/Mynavbar/Mynavbar.com';
import { Mycard1 } from './components/Mycard1/Mycard1.com';
import { Toolbar } from '@mui/material';
import Mycarousel from './components/Mycarousel/Mycarousel.com';
import SwipeableTextMobileStepper from './components/Mycarousel/Mycarousel.com';

export const App:React.FC<{}>=()=>{
  return<>
  <Mynavbar/>
  {/* <Toolbar/> */}
  <br />
  <Mycard1/>
  <br />
  <SwipeableTextMobileStepper/>
  
  </>
}

export default App;
