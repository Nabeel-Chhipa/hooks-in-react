import React, { useRef } from 'react'

const UseRefHook = () => {

  const inputRef = useRef(null)

  const handleFunction = () => {
    // console.log('Testing')
    inputRef.current.value='button click'
    inputRef.current.focus()
  }

  return (
    <>
      <h4>React useRef Hook.</h4>
      <input type='text' ref={inputRef} />
      <button onClick={handleFunction}>Click Here</button>
    </>
  )
}

export default UseRefHook