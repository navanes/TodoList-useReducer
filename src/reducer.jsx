export default function reducer (state, action) {
  if (action.type === 'add') {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isComplete: false
      }
    ]
  } else if (action.type === 'delete') {
    return state.filter((t) => t.id !== action.payload.id)
  } else if (action.type === 'clearCompleted') {
    return state.filter((todo) => !todo.isComplete)
  } else if (action.type === 'change') {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          isComplete: !todo.isComplete
        }
      } else {
        return todo
      }
    })
  }
}
