import { ToDoContext } from 'contexts/ToDoContext'
import { useContext } from 'react'

export const useToDo = () => {
    return useContext(ToDoContext)
  }
  