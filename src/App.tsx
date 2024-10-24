import Header from "./components/Header"
import "./assets/style/Header.css"
import Card from "./components/Card"
import "./assets/style/Card.css"
import "./assets/style/Section.css"
import { useState } from "react"


function App() {
  let count = 0;
  // Version pas ouf : 
  // const state = useState(0)
  // const value1 = state[0];
  // const value2 = state[1];

  // La bonne version avec tableau destructurer
  const [counter, setCounter] = useState(0);
  // Attention à ne pas mettre le setter en dehors de la fonction retour dans un bouton, car il est possible de déclencher une boucle infinie !
  // Le setter s'excecute et rafraîchit le composant pour recommencer à l'infini !
  
  return (
    <>
    <Header/>
    <section>
      <Card firstName="Mouette" image="https://lemagdesanimaux.ouest-france.fr/images/dossiers/2018-06/goeland-064114.jpg"/> 
      {/* il faut ajouter des props pour individualiser les cards */}
      <Card firstName="Mésange Bleue" image="https://i-dj.unimedias.fr/2023/09/12/dj111ppmesangebbleuefotolia-65001ce32e046.jpg?auto=format,compress&cs=tinysrgb&w=1200"/> 
      {/* ici on passe des props à un élément enfant (parent vers enfant) */}
      <Card firstName="Sitelle Torchepot" image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRDOtWLFv4C90jvibuQO2NfVmXr9dTphiaGm6vCPaELmGxPhX8u"/>
      <Card firstName="Pic Vert" image="https://upload.wikimedia.org/wikipedia/commons/d/d5/European_green_woodpecker_%28Picus_viridis%29_female.jpg"/>
    </section>
    <div>
      <p>{count}</p>
      <p>{counter}</p>
      {/* mise en place d'un state --> ici c'est une fonction fléchée anonyme*/}
      <button onClick={() => {console.log('Coucou')}}>Message</button> 
      {/* ici le bouton count passe en mode "idle" = il ne va pas s'actualiser/rerender (se rafraîchisse) --> donc count à toujours la valeur initiale
      React ne se met à jour qu'une fois au départ : Life Cicle de React : on a besoin d'un state*/}
      <button onClick={() => {count++; console.log(count)}}>Increment</button> 

      {/* Un utilisant le setCounter défini dans le useState : */}
      <button onClick={() => {setCounter(counter+1)}}>Counter</button> 
    </div>
    </>
  )
}

export default App
