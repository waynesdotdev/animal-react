import { useState } from 'react'
import './App.css'
import AnimalShow from './components/AnimalShow'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
  return animals[Math.floor(Math.random() * animals.length)]
}

export default function App() {
  const [animals, setAnimals] = useState([])
  console.log(animals)

  const handleClick = () => {
    const newAnimal = getRandomAnimal()
    setAnimals((prevAnimal) => {
      return [...prevAnimal, newAnimal]
    })
  }

  const renderedAnimals = animals.map((animal, index) => <AnimalShow key={index} type={animal} />)

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </>
  )
}
