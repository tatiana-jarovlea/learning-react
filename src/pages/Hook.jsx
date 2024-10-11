import { Box, Typography } from '@mui/material'
import { UserHook } from 'components/userHooks/UserHook'

const Hook = () => {
  return (
    <>
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h2" align="center">
          Hook
        </Typography>
        <UserHook />
      </Box>
    </>
  )
}

export default Hook

