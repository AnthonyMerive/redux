import { addDoc, collection } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { typesEstudiantes } from "../types/types"


export const registerEstudiante = (doc, nom, apell, tel, cel, dir, correo, img) => {
    return (dispatch) =>{
        const newEstudiante ={
            doc,
            nom,
            apell,
            tel,
            cel,
            dir,
            correo,
            img
        }
        addDoc(collection(db, "estudiantes"), newEstudiante)
        .then(resp=>{
            dispatch(registerEstudianteSincrono(newEstudiante))
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

export const registerEstudianteSincrono = (estudiante) => {
    return {
        
         type: typesEstudiantes.register,
         payload: estudiante
        
    }
}
