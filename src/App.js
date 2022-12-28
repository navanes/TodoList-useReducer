import './App.css'
import { useReducer } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import TodoFooter from './TodoFooter'
import initialState from './initialState'
import reducer from './reducer'

function App () {
  const [todos, dispatch] = useReducer(reducer, initialState)
  const onAdd = (text) => {
    dispatch({
      type: 'add',
      payload: {
        text
      }
    })
  }
  const onClearCompleted = () => {
    dispatch({
      type: 'clearCompleted',
      payload: {
        isComplete: false
      }
    })
  }

  const onChange = (newTodo) => {
    console.log(newTodo)
    dispatch({
      type: 'change',
      payload: {
        id: newTodo.id
      }
    })
  }

  const onDelete = (todo) => {
    dispatch({
      type: 'delete',
      payload: {
        id: todo.id
      }
    })
  }

  return (
    <div className="App">
      <TodoForm onAdd={onAdd} />
      <TodoList todos={todos} onChange={onChange} onDelete={onDelete}/>
      <TodoFooter todos={todos} onClearCompleted={onClearCompleted}/>
    </div>
  )
}

export default App
