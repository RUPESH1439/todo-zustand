import { Flex } from '@chakra-ui/react'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  return (
    <Flex
      flex={1}
      flexDirection='column'
      height='100vh'
      width='100vw'
      px='40'
      py='20'
    >
      <TodoList />
    </Flex>
  )
}

export default App
