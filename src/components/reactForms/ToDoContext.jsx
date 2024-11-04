/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react'

const ToDoContext = createContext()

export const ToDoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([])
  const [todoId, setTodoId] = useState(0)

  const addTodo = (todo) => {
    setTodoList((prevList) => [...prevList, { ...todo, id: todoId }])
    setTodoId(todoId + 1)
  }

  const removeTodo = (id) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id))
  }

  const updateTodo = (updatedTodo) => {
    setTodoList((prevList) => prevList.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)))
  }

  return <ToDoContext.Provider value={{ todoList, addTodo, removeTodo, updateTodo }}>{children}</ToDoContext.Provider>
}

export const useToDo = () => {
  return useContext(ToDoContext)
}

