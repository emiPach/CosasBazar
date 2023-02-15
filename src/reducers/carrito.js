import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const carroSlice = createSlice({
  name: 'carro',
  initialState,
  reducers: {
    poner: (state, item) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(item);
      return state;
    },
    retirar: (state, id) => {
    
    
    state = state.filter( item => item.payload.id !== id.payload );
    return state;
    },
    vaciar:(state) =>{
      state = initialState;
      return state;
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { poner, retirar, vaciar} = carroSlice.actions

export default carroSlice.reducer