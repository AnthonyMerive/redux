import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { registerEstudiante, listarAsincronico } from '../actions/actionEstudiante';
import { logout } from '../actions/actionLogin'
import { fileUpload } from '../helpers/fileUpload';
import { useForm } from '../hooks/useForm';
import {ListarEstudiante} from './ListarEstudiante'

export default function Estudiantes({ history }) {

    const [imgUrl, setImgUrl] = useState('')
    const dispatch = useDispatch();
    const [guardar, setGuardar] = useState(false)

    const [values, handleInputChange, reset] = useForm({
        documento: '',
        nombres: '',
        apellidos: '',
        telefono: '',
        celular: '',
        direccion: '',
        correo: '',
        imagen: '',
    })

    let { documento, nombres, apellidos, telefono, celular, direccion, correo, imagen } = values;

    const handlePictureClick = () => {
        document.getElementById('fileSelector').click();

    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(resp => {
                setImgUrl(resp);
                console.log(resp)
            })
            .catch(error => {
                setImgUrl('Vuelva a cargar la imagen');
                console.log(error)
            })
    }

    const handleRegistro = (e) => {
        e.preventDefault()
        dispatch(registerEstudiante(
            documento,
            nombres,
            apellidos,
            telefono,
            celular,
            direccion,
            correo,
            imgUrl))
        reset();
        setImgUrl('');
        setGuardar(true)
    }


    const handleLogout = () => {
        dispatch(logout());
        history.replace('/login')
    }

    useEffect(() => {
        setGuardar(false)
        dispatch(listarAsincronico())
    }, [dispatch, guardar])

    return (<>
        <form onSubmit={handleRegistro}>
            <h1>Agrega estudiantes</h1>
            <div className="form-group">
                <div className="form-group col-md-4">
                    <label htmlFor="documento">Documento</label>
                    <input
                        className="form-control"
                        type="text"
                        name="documento"
                        value={documento}
                        onChange={handleInputChange}
                        id="documento" />
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="nombres">Nombres</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nombres"
                        value={nombres}
                        onChange={handleInputChange}
                        id="nombres" />
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input
                        className="form-control"
                        type="text"
                        name="apellidos"
                        value={apellidos}
                        onChange={handleInputChange}
                        id="apellidos" />
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                        className="form-control"
                        type="text"
                        name="telefono"
                        value={telefono}
                        onChange={handleInputChange}
                        id="telefono" />
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="celular">Celular</label>
                    <input
                        className="form-control"
                        type="text"
                        name="celular"
                        value={celular}
                        onChange={handleInputChange}
                        id="celular" />
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="direccion">Dirección</label>
                    <input
                        className="form-control"
                        type="text"
                        name="direccion"
                        value={direccion}
                        onChange={handleInputChange}
                        id="direccion" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="correo">Correo</label>
                    <input
                        className="form-control"
                        type="text"
                        name="correo"
                        value={correo}
                        onChange={handleInputChange}
                        id="correo" />
                </div>
                <br />

                <div className="form-group col-md-4">
                    <input
                        id="fileSelector"
                        type="file"
                        name="file"
                        value={imagen}
                        style={{ display: 'none' }}
                        onChange={handleFileChanged}
                    />
                </div>

                <div className="form-group d-inline-flex">
                    <div className="form-group ">
                        <label htmlFor="url">Foto de perfil</label>
                        <input
                            className="form-control"
                            type="text"
                            name="url"
                            id="url"
                            value={imgUrl}
                            disabled
                        />
                    </div>

                    <button
                        className="btn-sm btn-info ms-1 p-2 "
                        onClick={handlePictureClick}
                        type="button"
                    >📸</button>
                </div>

                <div>
                    <button className="btn btn-primary mt-3"
                        type="submit">Guardar</button>
                </div>

                <div>
                    <button
                        className="btn btn-danger mt-3"
                        onClick={handleLogout}
                        type="button"
                    >Logout</button>
                </div>

            </div>

        </form>
        <br />
        <hr />
        <br />
        <ListarEstudiante />
    </>)
}
