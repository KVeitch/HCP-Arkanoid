import './App.css'
import {createBricks} from './helper'

function App() {
  const [count, setCount] = useState(0)
  const bricks = createBricks();
// import Paddle from './components/Paddle/Paddle'
  console.log({bricks})
  return (
    <div className="App">
      {/* <Paddle /> */}
    </div>
  )
}

export default App
