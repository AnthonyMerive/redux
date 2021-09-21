import {types} from '../types/types'


export const agregarProducto = (producto) => {
    return {
        type: types.agregar,
        payload: producto
    }
}
