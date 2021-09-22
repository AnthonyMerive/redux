import React from 'react'
import AgregarCitas from '../components/AgregarCitas'
import ListarCita from '../components/ListarCita'

export default function AppCitas() {
    return (
        <div className="container text-center">
            <header><h1>EPS Sura</h1></header>
            <div className="row mt-3">
                <div className="col-md-6">
                    <AgregarCitas />
                </div>
                <div className="col-md-6">
                    <ListarCita />
                </div>
            </div>
        </div>
    )
}
