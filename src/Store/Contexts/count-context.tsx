// src/Store/Contexts/count-context.tsx
import React, { createContext, useContext, useReducer } from 'react'

// Types
/*
  All types already in ./react-app-env.d.ts
  
  type Action = {type: 'increment'} | {type: 'decrement'} | {type: 'error'}
  type Dispatch = (action: Action) => void
  type State = {count: number}
  type CountProviderProps = {children:  ReactNode}
*/

// Create initial Contexts
const CountStateContext = createContext<State | undefined>(undefined)
const CountDispatchContext = createContext<Dispatch | undefined>(undefined)

// reducer to handle the "dispatched" action within the countContext
function countReducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + 1}
    }
    case 'decrement': {
      return {count: state.count - 1}
    }
    case 'reset': {
      return {count: state.count = 0}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

// Provider Component to wrap components in that need this state
function CountProvider({children}: CountProviderProps) {
  const [state, setCount] = useReducer(countReducer, {count: 0})
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={setCount}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
}

// Custom Hook - Getter
function useCountState() {
  const context = useContext(CountStateContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

// Custom Hook - Setter
function useCountDispatch() {
  const context =  useContext(CountDispatchContext)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export {CountProvider, useCountState, useCountDispatch}