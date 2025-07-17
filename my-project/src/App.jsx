import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestOne from './components/TestOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
 <TestOne/>
    </>
  )
}

export default App
