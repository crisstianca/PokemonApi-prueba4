import { pokemonStartLoading, setPokemones } from "./pokemonSlice"


export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( pokemonStartLoading());

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${ page }`);
        const data = await resp.json();

        //console.log('DATA-PURA: ', data)
        const dataResults = data.results
        //console.log( 'dataResults1', dataResults)
        
        let pokemones = []
        const cantidad = dataResults.length - 1
        dataResults.forEach( async( pokemon, index ) => {
            let url = pokemon.url
            let resp = await fetch( url )
            let pokemonData = await resp.json()
            //console.log('POKEMONDATA: ', pokemonData)
            const imagenUrl = pokemonData.sprites.front_default
            const pokeName = pokemonData.name
            pokemonData = {name: pokeName, img: imagenUrl}
            pokemones.push( pokemonData )
            if( index === cantidad ) {
                //console.log('POKEMONES: ', pokemones)
                dispatch( setPokemones({ pokemones: pokemones }))
            }
        })

    }
}

