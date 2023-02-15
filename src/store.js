import { configureStore } from '@reduxjs/toolkit'
import carroReducer from './reducers/carrito'
import totalReducer from './reducers/total'


const store = configureStore({
    reducer: {
        carro: carroReducer,
        total: totalReducer,
  
    },
  })

export default store;