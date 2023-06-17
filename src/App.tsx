import { useEffect, useState } from 'react'

import './App.css'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'
import { Task } from './types/taskTypes'
import styled from 'styled-components'


const H1 = styled.h1` font-family: 'Exo 2', sans-serif;
font-size: 6rem;
color: #7375ff
`
const MAIN = styled.section`
display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
   `

export const App = () => {



  const [todos, setTodos] = useState<Array<Task>>(
    JSON.parse(localStorage.getItem('todos') || "[]")
  )
  const [filter, setFilter] = useState<string>('all')

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const handleAdd = (text: string) => {
    if (text === '') return
    setTodos([...todos, {
      id: crypto.randomUUID(),
      todo: text,
      done: false
    }])
  }

  const handleDelete = (id: string) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const handleChangeTodo = (todoId: string, done: boolean) => {
    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, done: done }
      } else {
        return todo
      }
    }))


  }


  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
  }


  return (
    <MAIN >
      <H1>To Do List</H1>
      <Form handleAdd={handleAdd} />
      <TodoList todos={todos} handleDelete={handleDelete} handleChangeTodo={handleChangeTodo} filter={filter} handleFilterChange={handleFilterChange} />
    </MAIN>
  )
}


