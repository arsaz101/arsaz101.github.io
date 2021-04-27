import React, { createContext, useContext, useReducer } from 'react'

type Props = {
  reducer?: any
  initialState?: any
  children?: any
}

export const StateContext = createContext({})

export const StateProvider = ({ reducer, initialState, children }: Props) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
