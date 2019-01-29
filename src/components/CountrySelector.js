import React from 'react';

const CountrySelector = (props) => {
  const options = props.pokemon.map((pokemon, index) => {
    return <option value={index} key={index}>{pokemon.name}</option>
  })

  function handleChange(event) {
    props.onPokemonSelected(event.target.value);
  }

  return (
    <select id="country-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a Pokemon...</option>
      { options }
    </select>
  )
}

export default CountrySelector;
