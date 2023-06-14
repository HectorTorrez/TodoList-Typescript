import { useState } from 'react'

import './App.css'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'

export const App= () => {

    interface Todo {
        id: number
        todo: string,
        done: boolean
    }

    const [todo, setTodo] = useState<Array<Todo>>()

    const handleAdd = (text: string) =>{
        setTodo([...todo,{
            id: Math.random(),
            todo: text,
            done: false
        }])
    }


    console.log(todo)


  return (
    <>
      <Form handleAdd={handleAdd}/>
      <TodoList todo={todo}/>
    </>
  )
}


