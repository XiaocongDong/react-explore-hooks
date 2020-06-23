import React, { useState } from 'react'

export default () => {
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('')

  const handleTextChange = (event: Event) => {
    setText(event.target.value)
  }
  console.log('render')
  return <div>
      <div>
        <div>current counter is : {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>
          Increase counter
        </button>
      </div>
      <div>
        <input onChange={handleTextChange} value={text}/>
      </div>
      <button onClick={() => setCounter(counter)}>
        set same counter
      </button>
    </div>
}
