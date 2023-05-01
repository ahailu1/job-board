import React,{ useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import DisplayHomePage from './components/homepage/homepage';
import DisplayNavBar from './components/navbar/navbar';
import AppRouter from './components/router/router';
import { BrowserRouter, Route, RouterProvider, Link, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

function App() {
  return (
    <div className='container w-full max-w-full m-0'>
      <DisplayNavBar/>
   <AppRouter/>
    </div>
  )
}

export default App
