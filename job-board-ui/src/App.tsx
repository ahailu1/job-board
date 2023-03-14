import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DisplayHomePage from './components/homepage/homepage';
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
 <DisplayHomePage/>
    </div>
  )
}

export default App
