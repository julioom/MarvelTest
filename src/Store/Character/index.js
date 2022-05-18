import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'character',
  initialState: { characters: [], favs: [] },
  reducers: {
    fetchAllAction: (state, { payload: { characters } }) => {
      state.characters = characters
    },
    addFavAction: (state, { payload: { character } }) => {
      state.favs = [...state.favs, character]
    },
    removeFavAction: (state, { payload: { id } }) => {
      state.favs = [...state.favs].filter(character => character.id !== id)
    },
  },
})

export const { fetchAllAction, addFavAction, removeFavAction } = slice.actions

export default slice.reducer
