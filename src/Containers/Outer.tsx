import React from 'react';
import MainNavbar from '../Components/MainNavbar';
import { BrowserRouter } from 'react-router-dom';
import AuthSwitch from '../Components/AuthSwitch';

function Outer() {
  return (
    <div>
      <BrowserRouter>
        <MainNavbar></MainNavbar>
        <AuthSwitch></AuthSwitch>
      </BrowserRouter>
    </div>
  );
}

export default Outer;
