import { types } from "../types/types"

const initialState = {
    productos: []
}

export const productoReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.agregar:

            return {
                productos: [
                    ...state.productos,
                    action.payload
                ]
            };

        default:

            return state;
    }
}
