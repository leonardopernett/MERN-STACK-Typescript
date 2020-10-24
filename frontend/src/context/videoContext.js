import { useState } from "react"
import  React from 'react'

export const Context = React.createContext({name:"leo"})


export default function VideoContext({children}) {
  const [state, setstate] = useState([])
  return <Context.Provider value={{state,setstate}}>
          {children}
        </Context.Provider>
  
}
