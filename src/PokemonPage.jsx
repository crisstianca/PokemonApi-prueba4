import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {  getPokemons } from "./store/Slices/thunks";

export const PokemonPage = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemones } = useSelector( state => state.pokemon );
    const [page, setPage] = useState(0)
    
    console.log('POKEMONES EN LA PAGE: ', pokemones )
    //console.log('Hola', pokemones[0].name )
    useEffect(() => {
        dispatch( getPokemons(page))
    }, [])
    
    const pageMas = () => {
        const newPage = page + 1 * (pokemones.length)
        dispatch( getPokemons( newPage ))
        setPage( newPage )
    }

    const pageMenos = () => {
        const newPage =  page - pokemones.length
        dispatch( getPokemons( newPage ))
        setPage( newPage )
    }

    const lista = () => {
        const newArrayPoke = pokemones.map( (pokemon, index) => {
            let imagen = pokemon.img
            let pokeName = pokemon.name
            return <div key={ index }> 
                <p> { pokeName} </p>
                <img src={ imagen } alt="image" />
            </div>
        } )
        return newArrayPoke
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


    { isLoading? 
        <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div> : '' 
    } 

    <h3> Page: { page } </h3>

    <div className="container-names" >
            {
                lista()
            }
    </div>

    <div className="container-buttons">
        <button
            disabled = { page <= 0 } 
            className="btn btn-primary"
            onClick={ pageMenos }
        >
            Lista anterior
        </button>
        <button 
            disabled = { isLoading }
            className="btn btn-primary"
            onClick={ pageMas }
        >
            Siguiente lista 
        </button>
    </div>
    </>

  )
}
