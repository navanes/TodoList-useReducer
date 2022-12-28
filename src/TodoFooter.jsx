function TodoFooter ({ todos, onClearCompleted }) {
  const completedSize = todos.filter((todo) => todo.isComplete).length
  return (
        <div>
            <span>{completedSize}/{todos.length} is completed</span>
            <button onClick={onClearCompleted}>Clear completed</button>
        </div>
  )
}

export default TodoFooter
