import React, { createContext } from 'react'
import One from '../components/One'

const FirstName = createContext()
const LastName = createContext()

const UseContextHook = () => {
  return (
    <div>
      <FirstName.Provider value={'Nabeel'}>
        <LastName.Provider value={'Saleem'}>
          <One />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}

export default UseContextHook
export {
  FirstName,
  LastName
}