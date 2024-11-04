import { Box, Typography } from '@mui/material'
import { ToDoForm } from 'components/reactForms/ToDoForm'

export const Forms = () => {
  return (
    <>
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h2" align="center">
          Forms
        </Typography>
      </Box>
      <ToDoForm />
    </>
  )
}

