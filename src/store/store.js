import {createStore, combineReducers} from 'redux';
import {productoReducer} from '../reducers/productoReducer'

//combina los reducer existentes
const reducers = combineReducers({
    producto: productoReducer
    //aca se agregarian los demas productos
    //como un objeto
})

//creamos el store
export const store = createStore(
    reducers, //nuestros reducers
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //devtools de redux
)