import {
  Button,
  Checkbox,
  Flex,
  Input,
  InputProps,
  useTheme,
} from '@chakra-ui/react'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import useTodoStore from '../store'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo }) => {
  const theme = useTheme()
  const { id, value, done } = todo
  const inputRef = useRef<HTMLInputElement>(null)

  const [checked, setChecked] = useState(false)

  const { deleteTodo, updateTodo } = useTodoStore((state) => state)

  useEffect(() => {
    if (inputRef.current && value) {
      inputRef.current.value = value
    }
  }, [value, inputRef])

  useEffect(() => {
    setChecked(done)
  }, [done])

  return (
    <Flex direction='row' gap={3}>
      <Checkbox
        isChecked={checked}
        onChange={(e) => {
          setChecked(e.target.checked)
        }}
      />
      <Input ref={inputRef} fontSize={['sm', 'md']} />
      <Button
        bg={theme.colors.secondary.main}
        fontSize={['sm', 'medium']}
        width={120}
        onClick={() => {
          updateTodo(id, inputRef.current?.value, checked)
        }}
      >
        Update
      </Button>
      <Button
        width={120}
        fontSize={['sm', 'medium']}
        bg={theme.colors.error.main}
        onClick={() => {
          deleteTodo(id)
        }}
      >
        Delete
      </Button>
    </Flex>
  )
}

export default TodoItem
