import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { typesEstudiantes } from "../types/types"



export const eliminarAsincrono = (correo) => {
    return async (dispatch)=>{
        const coleccion = collection(db, "estudiantes")
        const q = query(coleccion, where("correo","==", correo))
        const result = await getDocs(q)
        result.forEach((document) =>{
            deleteDoc(doc(db, "estudiantes", document.id))
        })
        dispatch(eliminarSincrono(correo))
    }
}

export const eliminarSincrono = (correo) => {
    return{
        type: typesEstudiantes.eliminar,
        payload: correo
      }
}


export const listarAsincronico = () => {
    return async (dispatch) => {
        const datos = await getDocs(collection(db, "estudiantes"));
        const estudiante = [];
        datos.forEach((document) => {
            estudiante.push({
                    ...document.data()
            })
        })
        dispatch(listarSincrono(estudiante))
    }
}

export const listarSincrono = (estudiante) => {
    return {
        type: typesEstudiantes.listar,
        payload: estudiante
    }
}


export const registerEstudiante = (doc, nom, apell, tel, cel, dir, correo, img) => {
    return (dispatch) => {
        const newEstudiante = {
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
            .then(resp => {
                dispatch(listarSincrono(newEstudiante))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

// export const registerEstudianteSincrono = (estudiante) => {
//     return {

//         type: typesEstudiantes.register,
//         payload: estudiante

//     }
// }
