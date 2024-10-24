function Card ({ firstName, image } : {firstName : string, image : string}) {
  return (
    <figure>
      <img alt = "photo mouette" src = { image }/>
      <figcaption>{ firstName }</figcaption>
    </figure>
  )
}

export default Card;