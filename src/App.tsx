import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Paddle from './components/Paddle/Paddle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Paddle />
    </div>
  )
}

export default App
