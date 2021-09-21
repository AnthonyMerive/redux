import React from 'react'
import { useSelector } from 'react-redux'

const ListarProducto = () => {

    const { productos } = useSelector(store => store.producto);

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">Productos Almacenados</h2>
                <div className="lista-producto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre Producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productos.map(product =>
                                    <tr key={product.id}>
                                        <td>{product.nombre}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}

export default ListarProducto;