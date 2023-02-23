import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {createBricks} from './helper'

function App() {
  const [count, setCount] = useState(0)
  const bricks = createBricks();


  console.log({bricks})
  return (
    <div className="App">
     {/* Here's where stuff goes */}
    </div>
  )
}

export default App
