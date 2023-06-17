import { styled } from "styled-components"
import { Task} from "../types/taskTypes"

type Todo = {
    todo: Task
    handleDelete: (id:string) => void
    handleChangeTodo: (todoId: string, done: boolean) => void

}

const SECTION = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px;
  border-radius: 5px;
  height: auto;
  color:#7375ff;
  background-color: white;
  overflow-wrap: break-word;
`
const P_WHITHOUT_LINE =  styled.p`
  width: 250px;
  background-color: white;
  overflow-wrap: break-word;
  text-align: center;
  
`

const P =  styled.p`
  width: 250px;
  background-color: white;
  overflow-wrap: break-word;
  text-align: center;
  text-decoration-line: line-through;
`

const BUTTON = styled.button`
padding: 8px;
border-radius: 10px;

background-color: red;
border: none;
outline: none;
color: white;
font-weight: bold;
`

export const TodoCard = ({todo, handleDelete, handleChangeTodo}:Todo ) => {

  

  return (
    <SECTION >
            <input type="checkbox" checked={todo.done} onChange={(e) => {
              handleChangeTodo(todo.id, e.target.checked)
            }} name="" id="" />
            {
              todo.done ? (
                <P>{todo.todo}</P>

              ) : (
                <P_WHITHOUT_LINE>{todo.todo}</P_WHITHOUT_LINE>

              )
            }
            <BUTTON onClick={() => handleDelete(todo.id)}>Delete</BUTTON>
    </SECTION>
  )
}