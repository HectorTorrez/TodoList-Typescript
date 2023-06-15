import { useState } from 'react'

import './App.css'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'
import { Task } from './types/taskTypes'

export const App= () => {

  

    const [todos, setTodos] = useState<Array<Task>>([{
      id: crypto.randomUUID(),
      todo: 'hola',
      done: false
    }])

    const handleAdd = (text: string) =>{
      if(text === '') return
      setTodos([...todos,{
            id: crypto.randomUUID(),
            todo: text,
            done: false
        }])
    }



  return (
    <section >
      <Form handleAdd={handleAdd}/>
      <TodoList todos={todos}/>
    </section>
  )
}


