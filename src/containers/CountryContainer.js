import React from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon:[],
      currentPokemon: null
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      const jsonString = request.responseText;
      const pokemonObject = JSON.parse(jsonString);
      this.setState({pokemon: pokemonObject.results});
    });

    request.send();
  }

  handlePokemonSelected(index) {
    // const selectedCountry = this.state.pokemon[index];
    // this.setState({currentPokemon: selectedCountry})
    const pokeIndex = parseInt(index)+1;
    const url = 'http://pokeapi.co/api/v2/pokemon/' + pokeIndex;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      const jsonString = request.responseText;
      const pokemonObject = JSON.parse(jsonString);
      this.setState({currentPokemon: pokemonObject});
    });

    request.send();
  }

  render(){
    return (
      <div>
      <h2>Pokemon Container</h2>
      <CountrySelector pokemon={this.state.pokemon} onPokemonSelected={this.handlePokemonSelected} />
      <CountryDetail pokemon={this.state.currentPokemon} />
      </div>
    );
  }
}

export default CountryContainer;


// 1. Diagram the component structure
// 2. Diagram how data is distributed between the components
// 3. Where is country selected?
// 4. Draw and explain the data flow that happens when a country is selected?
