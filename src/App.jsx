import { useState } from 'react'
import './App.css'
import AnimalShow from './components/AnimalShow'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of Animals: {count}</div>
    </>
  )
}

export default App
