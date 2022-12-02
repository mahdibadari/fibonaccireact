import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Fibonacci from './Fibonacci'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fibonacci/>
    </>
  )
}

export default App
