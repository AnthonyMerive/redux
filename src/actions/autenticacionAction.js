import {types} from '../types/types'

export const login = (id,displayName) =>({
    type: types.login,
    payload:{
        id,
        displayName
    }
})

export const logout = () =>({
    type: types.logout
})