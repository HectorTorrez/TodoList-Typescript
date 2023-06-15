import { useState } from "react"
import { styled } from "styled-components"




type Props = {
  handleAdd: (task: string) => void
}

const SECTION = styled.section`
  display: flex;
  gap: 20px;
  padding: 50px;
  background-color: #7375ff;
  border-radius: 5px;
`

const INPUT = styled.input`
  background-color: #7375ff;
  color: white;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  &::placeholder{
    color: #fff
  }
`

const BUTTON = styled.button`

  width: 30px;
  height:30px;
  background-color: white;
  color: #7375ff;
  outline: none;
  border: none;

  font-weight: bold;
  border-radius: 100%;
  text-align: center;
  vertical-align:middle;
  &:hover{
    background-color: #7375ff;
    color: white;
    border: 2px solid white;
  }
  cursor: pointer;
  
  
`

export const Form = ({handleAdd}: Props) => {

    const [input, setInput] = useState('')

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>)  => {
      if(e.key === 'Enter'){
        handleTodo()
      }
    }

    const handleTodo = (): void => {
      handleAdd(input)
      setInput('')
    }

 
  return (
    <SECTION>
        <INPUT  onKeyDown={handleEnter} aria-placeholder="Add TODO"  onChange={(e)=> setInput(e.target.value)} type="text" value={input} placeholder="Add todo" />
        <BUTTON onClick={handleTodo} > + </BUTTON>
    </SECTION>
  )
}