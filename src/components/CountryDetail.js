import React, {Fragment} from 'react';

const CountryDetail = ({pokemon}) => {
  if (!pokemon) return null;
  return (
    <Fragment>
    <h6>Species: {pokemon.species.name}</h6>
    <h6>Weight: {pokemon.weight}</h6>
    <img src={pokemon.sprites.front_shiny}></img>
    <img src={pokemon.sprites.back_shiny}></img>
    </Fragment>
  );
}
export default CountryDetail;
