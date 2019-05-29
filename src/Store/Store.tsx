import React from 'react'
import { CountProvider } from './Contexts/count-context'

// WARNING: Probably not a great idea to have globally
// available state "store" unless emergency

// Place all custom Providers in here
const Store = (props: any) => {
    return (
        <CountProvider>
            {props.children}
        </CountProvider>
    )
}

export default Store;