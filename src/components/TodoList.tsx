import { styled } from "styled-components"
import {  Todo } from "../types/taskTypes"
import { TodoCard } from "./TodoCard"
import { useMemo } from "react"

const SECTION = styled.section`
display: grid;
grid-column: auto;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
justify-content: center;
gap: 20px;
margin-top: 30px;
width: auto;


`

const SECTION_BUTTONS = styled.section`
margin-top: 20px;
text-align: center;
width: 60%;
`

const BUTTON = styled.button`
  margin: 0 5px;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #7375ff;
  color: white;
  border-radius: 5px;
  &:hover{
    background-color: white;
    color: #7375ff;
  }
  cursor: pointer;
`

export const TodoList = ({todos, handleDelete, handleChangeTodo, filter, handleFilterChange}: Todo): JSX.Element => {

  const filteredTasks = useMemo(() => {
    if (filter === 'all') {
      return todos; 
    } else if (filter === 'complete') {
      return todos.filter((todo) => todo.done); 
    } else if (filter === 'incomplete') {
      return todos.filter((todo) => !todo.done); 
    }
    return todos;
  }, [todos, filter]);

  const complete = todos.filter(todo=> todo.done).length
  const incomplete = todos.filter(todo=> !todo.done).length

  return (
    <SECTION_BUTTONS>
      
      <BUTTON onClick={() => handleFilterChange('all')}>Mostrar todas {todos.length}</BUTTON>
      <BUTTON onClick={() => handleFilterChange('complete')}>Mostrar completadas {complete}</BUTTON>
      <BUTTON onClick={() => handleFilterChange('incomplete')}>Mostrar incompletas {incomplete}</BUTTON>

    <SECTION>
      
    {
        filteredTasks.map(todo=> (
          <TodoCard key={todo.id} todo={todo} handleDelete={handleDelete} handleChangeTodo={handleChangeTodo} />
          
        ))
     }
            
    </SECTION>
    </SECTION_BUTTONS>
  )
}