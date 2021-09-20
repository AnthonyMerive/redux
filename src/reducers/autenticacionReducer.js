import {types} from '../types/types'    

export const initialState={
    auth:{}
}

export const autenticacionReducer = (state, action) => {

        switch (action.type) {
            case types.login:
                
                return{
                    uuid: action.payload.id,
                    name: action.payload.displayName
                }

            case types.logout:
                return{

                }
            default:
                return state
        }
    
}


