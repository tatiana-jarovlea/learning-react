import { Box, Button, TextField, MenuItem, Select, Typography, InputLabel, FormControl } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToDoList } from './ToDoList'

const DEFAULT_TODO_ITEM = {
  id: NaN,
  title: '',
  description: '',
  status: '',
}

const STATUS_ITEMS = [
  { value: 'New', label: 'New' },
  { value: 'In progress', label: 'In progress' },
  { value: 'Done', label: 'Done' },
]

export const ToDoForm = () => {
  const [todoList, setTodoList] = useState([]) // Задачи из API
  const [todo, setTodo] = useState(DEFAULT_TODO_ITEM)
  const [isEditing, setIsEditing] = useState(false)

  // Загружаем список задач с сервера
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        // Преобразуем данные для корректного отображения
        const transformedData = response.data.map(todo => ({
          ...todo,
          description: todo.description || '', // Убедимся, что описание — пустая строка, если оно undefined
          status: todo.completed ? 'Done' : 'New' // Статус: 'Done' для true, 'New' для false
        }))
        setTodoList(transformedData)
      })
      .catch(error => {
        console.error("There was an error fetching the todo list!", error)
      })
  }, [])

  const handleSave = (event) => {
    event.preventDefault()

    // Преобразуем статус перед сохранением
    const statusForSave = todo.status === 'Done'

    if (isEditing) {
      axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        ...todo,
        completed: statusForSave,
      })
        .then(response => {
          setTodoList((prevList) =>
            prevList.map((item) => (item.id === todo.id ? response.data : item))
          )
          setIsEditing(false)
          setTodo(DEFAULT_TODO_ITEM) // Reset form
        })
        .catch(error => {
          console.error("Error updating the todo", error)
        })
    } else {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: todo.title,
        description: todo.description,
        completed: statusForSave,
      })
        .then(response => {
          setTodoList((prevList) => [...prevList, response.data])
          setTodo(DEFAULT_TODO_ITEM) // Reset form
        })
        .catch(error => {
          console.error("Error adding the todo", error)
        })
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }))
  }

  const handleSelectChange = (event) => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      status: event.target.value,
    }))
  }

  const handleEdit = (id) => {
    setIsEditing(true)
    const todoToUpdate = todoList.find((todo) => todo.id === id)
    setTodo(todoToUpdate)
  }

  const handleRemove = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => {
        setTodoList((prevList) => prevList.filter(todo => todo.id !== id))
      })
      .catch(error => {
        console.error("Error deleting the todo", error)
      })
  }

  return (
    <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', gap: '80px' }}>
      <Box sx={{ marginLeft: '20px', width: '50%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant="h5">Create a to-do list</Typography>
        <TextField
          fullWidth
          required
          label="Title"
          type="text"
          name="title"
          value={todo.title}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Description"
          type="text"
          name="description"
          value={todo.description}
          onChange={handleInputChange}
        />
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select label="Status" value={todo.status} onChange={handleSelectChange} variant="outlined" required>
            {STATUS_ITEMS.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{ alignSelf: 'center', width: '50%' }}
        >
          Save
        </Button>
      </Box>
      <ToDoList todoList={todoList} removeTodo={handleRemove} updateTodo={handleEdit} />
    </Box>
  )
}
