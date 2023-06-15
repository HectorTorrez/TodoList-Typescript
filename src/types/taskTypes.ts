export type Task =  {
    id: string,
    todo: string,
    done: boolean
}

export type Todo = {
    todos: Task[]
}
