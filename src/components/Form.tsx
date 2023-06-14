import { useState } from "react"



export const Form = ({handleAdd}) => {

    const [input, setInput] = useState('')

    const handleTodo = () => {
        

        handleAdd(input)


    }

 
  return (
    <section>
        <input onChange={(e)=> setInput(e.target.value)} type="text" placeholder="Add todo" />
        <button onClick={handleTodo}>ADD TODO</button>
    </section>
  )
}