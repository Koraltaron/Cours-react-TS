import { useState } from "react";

function Card ({ firstName, image } : {firstName : string, image : string}) {
  const [coins, setCoins] = useState(0);


  return (
    <div>
      <figure>
        <img alt = "photo mouette" src = { image }/>
      < figcaption>{ firstName }</figcaption>
      </figure>
      <p>Coins: {coins}</p>
      <button onClick={() => {
        setCoins(coins+1)
      }}>Add starts</button>
    </div>
   
  )
}

export default Card;