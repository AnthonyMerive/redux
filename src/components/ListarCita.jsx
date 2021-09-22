import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {borrarCitas} from '../actions/actionCitas'

export default function ListarCita() {

    const dispatch = useDispatch();

    const { citas } = useSelector(store => store.citas);

    const handleDelete = (id) => {
        dispatch(borrarCitas(id))
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">Agenda</h2>
                <div className="lista-citas">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Sintomas</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {citas.length===0?
                            <tr><td/>
                                <td/>
                                <td>-Sin registros-</td>
                                <td/>
                                <td/>
                            </tr>
                            :
                            citas.map(cita=>
                                <tr key={cita.id}>
                                    <td>{cita.nombre}</td>
                                    <td>{cita.fecha}</td>
                                    <td>{cita.hora}</td>
                                    <td>{cita.sintomas}</td>
                                    <td><button 
                                    className="btn-small btn-danger"
                                    onClick={()=>handleDelete(cita.id)}
                                    >
                                       &times;
                                    </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}
