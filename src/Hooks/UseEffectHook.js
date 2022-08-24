import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [resourceType, setResourceType] = useState('Posts')

    useEffect(() => {
        alert(`Resource type changed to ${resourceType}`)

        return () => {
            alert('')
        }
    }, [resourceType])

  return (
    <>
        <button onClick={() => setResourceType('Posts')}>Posts</button>
        <button onClick={() => setResourceType('Users')}>Users</button>
        <button onClick={() => setResourceType('Comments')}>Comments</button>
    </>
  )
}

export default UseEffectHook