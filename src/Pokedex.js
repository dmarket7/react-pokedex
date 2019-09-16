import React from 'react';
import Pokecard from './Pokecard';

class Pokedex extends React.Component {
  static defaultProps = {
    pokedex: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  }

  
  render() {
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
    }
    let newDeck = shuffle(this.props.pokedex);
    console.log("NEW DECK ---", newDeck)
    let p1 = newDeck.slice(0,4);
    let p1Score = p1.reduce((acc, next) => {
      return acc += next.base_experience;
    }, 0);
    let p2 = newDeck.slice(4);
    let p2Score = p2.reduce((acc, next) => {
      return acc += next.base_experience;
    }, 0);
    let p1Winner = false;
    let p2Winner = false;
    if(p1Score > p2Score) {
      p1Winner = true;
    } else {
      p2Winner = true;
    }

    return (
      <div>
        <h1 className={`player`}>Player 1</h1>
        <b>Total Experience: <span>{p1Score}</span></b>
        {p1Winner ? <p>Winning Hand!</p>: null}
        <div className={`pokedex`}>
          {p1.map(item => {
            return <Pokecard name={item.name} id={item.id} type={item.type} experience={item.base_experience} />
          })}
        </div>
        
        <h1 className={`player`}>Player 2</h1>
        <b>Total Experience: <span>{p2Score}</span></b>
        {p2Winner ? <p>Winning Hand!</p>: null}
        <div className={`pokedex`}>
          {p2.map(item => {
            return <Pokecard name={item.name} id={item.id} type={item.type} experience={item.base_experience} />
          })}
        </div>

      </div>
    );
  }
}

export default Pokedex;