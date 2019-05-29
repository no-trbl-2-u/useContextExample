import React from 'react'
import Counter from '../Components/Counter'

const HomePage = (props: any) => {
    return (
        <>
            <h1>Home Page</h1>
            <h2>Example App to demonstrate Context + useReducer</h2>
            <Counter />
        </>
    )
}

export default HomePage