import { typesEstudiantes } from "../types/types";

const initialState = {
    listaEstudiantes: []
}

export const estudianteReducer = (state = initialState, action) => {
    switch (action.type) {

        // case typesEstudiantes.register:

        //     return {
        //         listaEstudiantes: [action.payload]
        //     };

        case typesEstudiantes.listar:
            return {
                listaEstudiantes: [...action.payload]
            };

        case typesEstudiantes.eliminar:
            return {
                listaEstudiantes: state.listaEstudiantes.filter(stud=> stud.correo !== action.payload)
            };

        default:
            return state;
    }
}


