import { typesEstudiantes } from "../types/types";

const initialState = {
    estudiantes: []
}

export const estudianteReducer = (state = initialState, action) => {
    switch (action.type) {

        case typesEstudiantes.register:

            return {
                estudiantes: [action.payload]
            };

        default:
            return state;
    }
}


