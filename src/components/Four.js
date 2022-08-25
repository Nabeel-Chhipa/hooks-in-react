import React, { useContext } from 'react'
import { FirstName, LastName } from '../Hooks/UseContextHook'

const Four = () => {

    const fName = useContext(FirstName)
    const lName = useContext(LastName)

    return (
        <div>
            {fName}
            {lName}
        </div>
    )
}

export default Four