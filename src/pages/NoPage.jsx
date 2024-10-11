import { Box, Typography } from '@mui/material'

const NoPage = () => {
  return (
    <>
      <Box sx={{ marginTop: '100px' }}>
        <Typography align="center" variant="h5">
          {' '}
          Page Not Found
        </Typography>
        <Typography align="center" variant="body1">
          {' '}
          Apologies, but the page you were looking for was not found. 
        </Typography>
        <Typography align="center" variant="body1">
          {' '}
          Try reaching for the search button on the nav bar
          above to look for another one.
        </Typography>
      </Box>
    </>
  )
}

export default NoPage
