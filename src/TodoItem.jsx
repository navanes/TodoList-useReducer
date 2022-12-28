function TodoItem ({ todo, onChange, onDelete }) {
  return (
        <div>
            <label>
                <input type="checkbox" checked={todo.isComplete} onChange={(e) => {
                  onChange({
                    ...todo,
                    isComplete: e.target.checked
                  })
                }} />
                {todo.text}
                <button onClick={() => {
                  onDelete(todo)
                }}>X</button>
            </label>
        </div>
  )
}

export default TodoItem
