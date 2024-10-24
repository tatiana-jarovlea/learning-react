/* eslint-disable react/prop-types */
import { Box, List, Typography } from '@mui/material'
import { ToDoItem } from './ToDoItem'

export const ToDoList = ({ todoList, removeTodo, updateTodo }) => {
  return (
    <Box>
      <Typography> To Do List: </Typography>
      <List>
        {todoList.map((item, index) => (
          <ToDoItem key={index} item={item} removeTodo={removeTodo} updateTodo={updateTodo} />
        ))}
      </List>
    </Box>
  )
}

