import { useState } from "react"

type Props = {
  handleAdd: (task: string) => void
}

export const Form = ({handleAdd}: Props) => {

    const [input, setInput] = useState('')

    // const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    //   if(e.key === 'Enter'){
    //     handleAdd()
    //   }
    // }

    const handleTodo = () => {
      handleAdd(input)
      setInput('')
    }

 
  return (
    <section>
        <input  onChange={(e)=> setInput(e.target.value)} type="text" value={input} placeholder="Add todo" />
        <button onClick={handleTodo} >ADD TODO</button>
    </section>
  )
}