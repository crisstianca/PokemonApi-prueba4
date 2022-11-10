import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        isLoading: false,
        pokemones: [],
        page: 0,
    },
    reducers: {
        pokemonStartLoading: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemones: ( state, action ) => {
            state.isLoading = false;
            state.pokemones = action.payload.pokemones
            state.page = action.payload.page
        },
    }
});


// Action creators are generated for each case reducer function
export const { pokemonStartLoading, setPokemones } = pokemonSlice.actions;