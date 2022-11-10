import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from './Slices/pokemonSlice'

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer
  },
})