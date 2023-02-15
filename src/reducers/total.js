import { createSlice } from '@reduxjs/toolkit'

const initialState = 100;

export const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    cambiar: (state, item) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = item;
      return state;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { cambiar} = totalSlice.actions

export default totalSlice.reducer