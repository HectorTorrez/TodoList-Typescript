import { Task} from "../types/taskTypes"

type Todo = {
    todo: Task
}

export const TodoCard = ({todo}:Todo) => {

  return (
    <section >
            <input type="checkbox" name="" id="" />
            <p>{todo.todo}</p>
          </section>
  )
}