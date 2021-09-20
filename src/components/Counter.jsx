import React, { useReducer } from 'react'
import {CounterReducer, initialState, init} from '../reducers/CounterReducer'
import {types} from '../types/types'

export default function Counter() {

    const [counter, dispatch] = useReducer(CounterReducer, initialState, init)


    return (<>
        <div className="container mt-3">

            <h1>Counter: {counter} </h1>
            <hr />

            <button
                className="btn btn-danger me-2"
                onClick={()=>{
                    dispatch({type: types.decrement})
                }}
            >
                -1
            </button>

            <button
                className="btn btn-warning me-2"
                onClick={()=>{
                    dispatch({type: types.reset})
                }}
            >
                reset
            </button>

            <button
                className="btn btn-success me-2"
                onClick={()=>{
                    dispatch({type: types.increment})
                }}
            >
                +1
            </button>

        </div>
    </>)
}
