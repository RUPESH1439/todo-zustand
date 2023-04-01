import { FunctionComponent, useRef } from 'react'
import TodoItem from './TodoItem'
import { Box, Button, Flex, Input, Text, useTheme } from '@chakra-ui/react'
import useTodoStore from '../store'

interface TodoListProps {}

const TodoList: FunctionComponent<TodoListProps> = () => {
  const { todos, addTodo } = useTodoStore((state) => state)
  const inputRef = useRef<HTMLInputElement>(null)
  const theme = useTheme()
  return (
    <Box>
      <Text fontSize='3xl' mb='5'>
        Todo List
      </Text>
      <Flex flexDirection='row' gap={5}>
        <Input
          placeholder='Add a new todo'
          mb='5'
          ref={inputRef}
          onChange={(e) => {
            if (inputRef.current) {
              inputRef.current.value = e.target.value
            }
          }}
        />
        <Button
          variant='solid'
          width={250}
          bg={theme.colors.primary.main}
          onClick={() => {
            const _ref = inputRef.current
            if (!_ref) return
            addTodo(_ref?.value)
            _ref.value = ''
          }}
        >
          Add Todo
        </Button>
      </Flex>
      {todos.map((todo) => (
        <Box mb='3' key={todo.id}>
          <TodoItem todo={todo} />
        </Box>
      ))}
    </Box>
  )
}

export default TodoList
