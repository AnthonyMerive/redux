import {types} from '../types/types'

export const addCitas = (cita) => {
    return {
        type: types.agregar,
        payload: cita
    }
}

export const borrarCitas = (id) => {
    return {
        type: types.borrar,
        payload: id
    }
}
