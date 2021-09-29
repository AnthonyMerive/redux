import React from 'react'
import { useDispatch } from 'react-redux'
import { registerEstudiante } from '../actions/actionEstudiante';
import { logout } from '../actions/actionLogin'
import { fileUpload } from '../helpers/fileUpload';
import { useForm } from '../hooks/useForm';


export default function Estudiantes({ history }) {

    const dispatch = useDispatch();

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
                imagen = resp;
                console.log(resp)
            })
            .catch(error => {
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
            imagen))
            reset();
    }



    const handleLogout = () => {
        dispatch(logout());
        history.replace('/login')
    }


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

                    <button
                        className="btn btn-success"
                        onClick={handlePictureClick}
                        type="button"
                    >Imagen</button>
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
    </>)
}
