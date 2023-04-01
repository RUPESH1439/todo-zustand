import { create } from 'zustand'

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (value) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: crypto.randomUUID(), value: value, done: false },
      ],
    })),
  updateTodo: (id, value, done) => {
    set((state) => {
      const _todoIndex = state.todos.findIndex((todo) => todo.id === id)
      const updatedTodo = {
        id,
        value: value ?? '',
        done: done,
      }
      const _copyTodos = [...state.todos]
      _copyTodos[_todoIndex] = updatedTodo
      return {
        todos: _copyTodos,
      }
    })
  },
  deleteTodo: (id) =>
    set((state) => ({
      todos: [...state.todos.filter((todo) => todo.id !== id)],
    })),
}))

export default useTodoStore
