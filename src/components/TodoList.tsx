
interface Prop{
    id: number,
    todo: string,
    done: boolean
}

export const TodoList = ({todo}: Prop) => {
    
  return (
    <>
    {
        todo.map(t=> {
            <ul key={t.id}>
                <li>{t.todo}</li>
            </ul>
        })
    }
    </>
  )
}