export type Task =  {
    id: string,
    todo: string,
    done: boolean
}

export type Todo = {
    todos: Task[]
    handleDelete: (id:string) => void
    handleChangeTodo: (todoId: string, done: boolean) => void
    filter: string
    handleFilterChange: (newFilter: string) => void
}
