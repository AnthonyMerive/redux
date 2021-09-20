import React, { useReducer, useState } from 'react'
import { autenticacionReducer, initialState } from '../reducers/autenticacionReducer'
import { login, logout } from '../actions/autenticacionAction'
export default function Login() {

    const [state, dispatch] = useReducer(autenticacionReducer, initialState)

    const [usuario, setUsuario] = useState({
        "user": '',
        "password": ''
    })

    const { user, password } = usuario

    const handleChange = ({ target }) => {
        setUsuario({
            ...usuario,
            [target.name]: target.value
        })
    }

    return (<>
        <h1>Login</h1>
        <hr />

        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Usuario</span>
            <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                name="user"
                onChange={handleChange}
                value={user}
                required=""
            />
        </div>

        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
            <input
                type="password"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                name="password"
                onChange={handleChange}
                value={password}
                required=""
            />
        </div>

        <button
            className="btn btn-primary me-2"
            onClick={() => {
                dispatch(login(usuario.password, usuario.user))
                setUsuario({
                    "user": '',
                    "password": ''
                })
            }}
        >
            Login
        </button>

        <button
            className="btn btn-danger"
            onClick={() => {
                dispatch(logout('')) 
                setUsuario({
                    "user": '',
                    "password": ''
                })
            }}
        >
            Logout
        </button>
        <hr />
        <h4>Usuario Logeado</h4>
        <hr />
        <p>
            {state.name}
            <br />
            {state.uuid}
        </p>
    </>)
}
