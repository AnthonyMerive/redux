import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { registroEmailPasswordNombre } from '../actions/actionRegister'

export default function RegistroFirebase() {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: '',
        name: ''
    })

    const { email, password, name } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email, password, name))
        reset();
    }

    return (<>

        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value= {name}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="email"
                    name="email"
                    value= {email}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value= {password}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrarse
            </Button>

            <Link to="/">Login</Link>

        </Form>

    </>)
}
