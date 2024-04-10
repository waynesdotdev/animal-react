import { useState } from 'react'
import bird from '../assets/svg/bird.svg'
import cat from '../assets/svg/cat.svg'
import cow from '../assets/svg/cow.svg'
import dog from '../assets/svg/dog.svg'
import gator from '../assets/svg/gator.svg'
import horse from '../assets/svg/horse.svg'
import heart from '../assets/svg/heart.svg'

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
}

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0)

  function handleClick() {
    setClicks((prevClicks) => prevClicks + 1)
  }

  return (
    <div onClick={handleClick}>
      <img src={svgMap[type]} alt='animal' />
      <img src={heart} alt='heart' style={{ width: 10 + 10 * clicks + 'px' }} />
    </div>
  )
}

export default AnimalShow
