import React, {useState} from "react";

function Pokemon() {
  const [rnd, setRnd] = useState(Math.floor(Math.random() * (154 - 1 + 1) + 1));

  function handleClick() {
    setRnd(Math.floor(Math.random() * (154 - 1 + 1) + 1))
  }

  return (
    <div className={'pokemon-container'}>
      <h1>Pokemon# <span className={'rnd'}>{rnd}</span></h1>
      <div className="">
        <img className={'pokemon-image'}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rnd}.png`}
         alt={'pokemon-image'}/>
        <button onClick={handleClick} className={'btn'}>Change Pokemon</button>
      </div>

    </div>
  )
}

export default Pokemon;