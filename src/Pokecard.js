import React from 'react';

class Pokecard extends React.Component {
  render() {
    const pokeName = this.props.name;
    const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
    const type = this.props.type;
    const experience = this.props.experience;

    return (
      <div>
        <div className={`card`} style={{width: `18rem`}}>
          <h3 className={`card-title`}>{ pokeName }</h3>
          <img src={imageURL} className={`card-img-top`} alt={"Pokecard"}></img>
          <small>{type}</small>
          <small>{experience}</small>
        </div>
      </div>
    );
  };
}

export default Pokecard;