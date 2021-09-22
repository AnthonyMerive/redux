import {createStore, combineReducers } from 'redux';
import {citasReducer} from '../reducers/citasReducer'
import { obtenerLocalStorage, guardarLocalStorage}from '../localStorage'

// combina los reducer existentes
const reducers = combineReducers({
    citas: citasReducer
    //aca se agregarian los demas productos
    //como un objeto
})

const storageState = obtenerLocalStorage();

//creamos el store
export const store = createStore(
    reducers, //nuestros reducers
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //devtools de redux
)

store.subscribe(()=>{
    guardarLocalStorage({
      citas: store.getState().citas
    })
  })