import { Todo } from "../types/taskTypes"
import { TodoCard } from "./TodoCard"


export const TodoList = ({todos}: Todo) => {

  return (
    <>
      
    {
        todos.map(todo=> (
          <TodoCard key={todo.id} todo={todo}  />
          
        ))
     }
            
    </>
  )
}