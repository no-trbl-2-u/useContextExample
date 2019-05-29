/// <reference types="react-scripts" />

type Action = 
    | {type: 'increment'} 
    | {type: 'decrement'}
    | {type: 'reset'}
    | {type: 'error'}
    
type Dispatch = (action: Action) => void
type State = {count: number}
type CountProviderProps = {children: React.ReactNode}
