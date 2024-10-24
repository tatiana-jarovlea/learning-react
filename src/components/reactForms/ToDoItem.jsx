/* eslint-disable react/prop-types */
import { IconButton, ListItemText } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import ListItem from '@mui/material/ListItem'

export const ToDoItem = ({ item, removeTodo, updateTodo }) => {
  return (
    <>
      <ListItem key={item.id}>
        <ListItemText primary={`${item.title} - ${item.description} - ${item.status}`} />
        <IconButton onClick={() => updateTodo(item.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => removeTodo(item.id)}>
          <CloseIcon />
        </IconButton>
      </ListItem>
    </>
  )
}

