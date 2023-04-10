import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DisplayHomePage from './components/homepage/homepage';
import DisplayNavBar from './components/navbar/navbar';

function App() {






  return (
    <div className='container w-full max-w-full m-0'>
      <DisplayNavBar/>
 <DisplayHomePage/>

    </div>
  )
}

export default App
