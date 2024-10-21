/* eslint-disable react/prop-types */
//create a to-do list with the next fields: id, title, description, status. create the add, remove, update operations

import { Box, IconButton, List, ListItem, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'

const DEFAULT_FORM_DATA = { id: NaN, title: '', description: '', status: false }

const ToDoList = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA)
  const [entries, setEntries] = useState([])
  const [currentEntryId, setCurrentEntryId] = useState(0)
  const [entryToEdit, setEntryToEdit] = useState(null)

  useEffect(() => {
    if (entryToEdit) {
      setFormData(entryToEdit)
    }
  }, [entryToEdit])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSave = (event) => {
    // Page won't reload
    event.preventDefault()

    //Set new id for entry
    const newEntry = { ...formData, id: currentEntryId }
    setCurrentEntryId(currentEntryId + 1)
    setEntries((prevEntries) => [...prevEntries, newEntry])

    // Reset the form fields
    setFormData(DEFAULT_FORM_DATA)

    console.log(entries)
  }

  const handleEdit = (event) => {
    event.preventDefault()

    const editedEntry = { ...formData, id: entryToEdit.id }

    // Update the entries array by replacing the edited entry
    setEntries((prevEntries) => prevEntries.map((entry) => (entry.id === entryToEdit.id ? editedEntry : entry)))

    // Reset the form fields and clear the entry to edit
    setFormData(DEFAULT_FORM_DATA)
    setEntryToEdit(null)
  }

  return (
    <>
      <Box sx={{ marginLeft: '20px' }}>
        <Typography> To Do List: </Typography>

        <form onSubmit={entryToEdit ? handleEdit : handleSave}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="status">Status</label>
          <input type="checkbox" name="status" checked={formData.status} onChange={handleChange} />
          <br />
          <br />
          <button type="submit">{entryToEdit ? 'Update entry' : 'Save entry'}</button>
        </form>
      </Box>
      <FormList entries={entries} setEntries={setEntries} setEntryToEdit={setEntryToEdit} />
    </>
  )
}

const FormList = ({ entries, setEntries, setEntryToEdit }) => {
  return (
    <List>
      {entries.map((item) => (
        <ListItem key={item.id}>
          <Typography>
            {item.title} - {item.description} - {item.status ? 'Completed' : 'Pending'}
          </Typography>

          <IconButton onClick={() => setEntryToEdit(item)}>
            <EditIcon />
          </IconButton>

          <IconButton onClick={() => removeEntry(entries, setEntries, item.id)}>
            <CloseIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  )
}

// Remove entry by id
const removeEntry = (entries, setEntries, id) => {
  setEntries((entries) => entries.filter((item) => item.id !== id))
}

export const ToDoForm = () => {
  return (
    <>
      <Box sx={{ marginLeft: '20px' }}>
        <Typography variant="h5"> Create a to-do list</Typography>
        <ToDoList />
      </Box>
    </>
  )
}

