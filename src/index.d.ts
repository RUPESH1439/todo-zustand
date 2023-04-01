interface Todo {
  id: string
  value?: string
  done: boolean
}

interface TodoState {
  todos: Todo[]
  addTodo: (value: string) => void
  updateTodo: (id: string, value?: string | null, done: boolean) => void
  deleteTodo: (id: string) => void
}
