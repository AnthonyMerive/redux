import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import {eliminarAsincrono} from '../actions/actionEstudiante'

export const ListarEstudiante = () => {

    const { listaEstudiantes } = useSelector(store => store.estudiante)
    const dispatch = useDispatch();

    

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Telefono</th>
                        <th>Celular</th>
                        <th>Dirección</th>
                        <th>Correo</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        (listaEstudiantes) ?
                            (
                                listaEstudiantes.map((element, index) => (

                                    <tr key={index}>
                                        <td>{element.doc}</td>
                                        <td>{element.nom}</td>
                                        <td>{element.apell}</td>
                                        <td>{element.tel}</td>
                                        <td>{element.cel}</td>
                                        <td>{element.dir}</td>
                                        <td>{element.correo}</td>
                                        <td><img widht={100} height={100} src={element.img} alt="" /></td>

                                        <td><button onClick={()=>dispatch(eliminarAsincrono(element.correo))} className="btn btn-danger">Eliminar</button></td>
                                    </tr>



                                ))



                            )
                            :
                            <tr><td>sin Datos</td></tr>

                    }
                </tbody>
            </Table>
        </div>
    )
}
