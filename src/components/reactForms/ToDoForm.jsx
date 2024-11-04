import { Box, Button, TextField, MenuItem, Select, Typography, InputLabel, FormControl } from '@mui/material';
import { useState } from 'react';
import { ToDoList } from './ToDoList';
import { useToDo } from './ToDoContext';

const DEFAULT_TODO_ITEM = {
  id: NaN,
  title: '',
  description: '',
  status: '',
};

const STATUS_ITEMS = [
  { value: 'New', label: 'New' },
  { value: 'In progress', label: 'In progress' },
  { value: 'Done', label: 'Done' },
];

export const ToDoForm = () => {
  const { todoList, addTodo, removeTodo, updateTodo } = useToDo();
  const [todo, setTodo] = useState(DEFAULT_TODO_ITEM);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (event) => {
    event.preventDefault();

    if (isEditing) {
      updateTodo(todo); // Pass the complete todo object
      setIsEditing(false);
    } else {
      addTodo({
        title: todo.title,
        description: todo.description,
        status: todo.status,
      });
    }

    setTodo(DEFAULT_TODO_ITEM); // Reset form
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleSelectChange = (event) => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      status: event.target.value,
    }));
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    const todoToUpdate = todoList.find((todo) => todo.id === id);
    setTodo(todoToUpdate);
  };

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
          required
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
      <ToDoList todoList={todoList} removeTodo={removeTodo} updateTodo={handleEdit} />
    </Box>
  );
};
