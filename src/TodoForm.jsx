import { useState } from 'react'

function TodoForm ({ onAdd }) {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(text)
    setText('')
  }
  return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange}/>
            <button>Add</button>
        </form>
  )
}

export default TodoForm
