import React, { useEffect } from 'react'
import { useCountState, useCountDispatch } from '../Store/Contexts/count-context'

const Counter: React.FC = () => {
    // Use custom hooks to create [state, disptach] = context()
    const state: State = useCountState()
    const dispatch: Dispatch = useCountDispatch()
    
    const { count } = state
    
    return (
        <>
            <h1>Counter App</h1>
            
            {/* Display Count */}
            <h2>The Current count is { count }</h2>
            
            {/* Increment */}
            <button onClick={() => dispatch({type:"increment"}) } >
                Increment
            </button>
            
            {/* Decrement */}
            <button onClick={() => dispatch({type:"decrement"}) } >
                Decrement
            </button>
            
            {/* Reset */}
            <button onClick={() => dispatch({type:"reset"}) } >
                Reset
            </button>
        </>
    )
}

export default Counter