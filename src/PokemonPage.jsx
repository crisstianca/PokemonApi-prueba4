import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/Slices/thunks";

export const PokemonPage = () => {

    let lastPage = ''

    const dispatch = useDispatch();
    const { isLoading, pokemones, page } = useSelector( state => state.pokemon );
    const [lista, setLista] = useState(page)

    useEffect(() => {
        dispatch( getPokemons())
    }, [])
    
    const restList = ( event, page) => {
        setLista( lista - 1)
        dispatch( getPokemons( lista ))
    }


    return (
    <>
    <div className="container-title">
      <h1> Test </h1>
    </div>
    
    <div className="container-image">
        <img src="src/images/pokemon.webp" alt="image" />
    </div>
    <hr />

    <h3> Loading: { isLoading? 'True' : 'False' } </h3>
    <h3> Lista: { lista } </h3>
    <h3> Page: { page } </h3>

    <div className="container-names" >
            {
                pokemones.map( pokemon => (
                    <div key={pokemon.name}> 
                        <p> { pokemon.name } </p> 
                        {/* <img src={ pokemon.results.sprites.front_default } alt="" /> */}
                    </div>
                ) )
            }
    </div>

    <div className="container-buttons">
        <button 
            className="btn btn-primary"
            onClick={ restList }
        >
            Lista anterior
        </button>
        <button 
            disabled = { isLoading }
            className="btn btn-primary"
            onClick={ () => dispatch( getPokemons(page))}
        >
            Siguiente lista 
        </button>
    </div>
    </>

  )
}
