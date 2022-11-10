import { pokemonStartLoading, setPokemones } from "./pokemonSlice"


export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( pokemonStartLoading());

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${ page }`);
        const data = await resp.json();

        dispatch( setPokemones({ pokemones: data.results, page: page + 1 }))
    }
}

