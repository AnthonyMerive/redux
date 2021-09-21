import React from 'react';
import {useForm} from '../hooks/useForm'
import {useDispatch} from 'react-redux'
import {agregarProducto} from '../actions/productoAction'
const Producto = () => {

    const [ formValue, handleInputChange, reset ] = useForm({
        nombre: ''
    })
    const {nombre} = formValue;
    const dispatch = useDispatch();

    const nuevoProducto = (product) => {
        dispatch(agregarProducto(product)) 
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        reset();

        nuevoProducto({
            nombre
        })
    }
    

  return (
    <div>
       <div className="card mt-5">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h1> Agregar Producto</h1>
                    <hr />
                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Producto</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="nombre"
                                autoComplete="off"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Producto;