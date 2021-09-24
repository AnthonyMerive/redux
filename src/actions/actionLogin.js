import { types } from '../types/types'
import { getAuth, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { googleAuth } from '../firebase/firebaseConfig'

//autenticacion google

const auth = getAuth();

export const loginGoogle = () => {
    return (dispatch) => {
        signInWithPopup(
            auth,
            googleAuth
        )
        .then(({user}) =>{
            // console.log(user)
            dispatch(loginSincrono(user.uid, user.displayName))
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

//login google

export const loginEmailPassword = (email,password) => {
    return(dispatch) =>{
        signInWithEmailAndPassword(auth, 
            email, 
            password
            ).then(({user})=>{
                dispatch(loginSincrono(user.uid, user.displayName))
                console.log(`Bienvenido ${user.displayName}`)
            }).catch(error=>{
                console.log(error)
            })
    }
}



export const loginSincrono = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}
