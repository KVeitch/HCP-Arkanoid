import './App.css'
import React,  { useState} from 'react'
import {createBricks} from './helper'

const App= () => {
  const [count, setCount] = useState(0)
  const bricks = createBricks();
  console.log({bricks})
  return (
    <div className="App">
      {/* <Paddle /> */}
    </div>
  )
}

export default App
