import Box from '@mui/material/Box'
import { Divider, Typography } from '@mui/material'
import { Gallery } from './ComponentExtraction'
import { AdjustImage } from './AdjusmentImage'
import { PassingJsx } from './PassingJSX'

export const PassingProps = () => {
  return (
    <>
      <Box>
        <Typography variant="h5">Task 1</Typography>
        <Typography variant="subtitle1" color="#676767">
          Extract a Profile component out of it to reduce the duplication.
        </Typography>
        <Gallery />
      </Box>
      <Divider />
      <Box>
        <Typography variant="h5">Task 2</Typography>
        <Typography variant="subtitle1" color="#676767">
          Change the Avatar component to request the closest image size based on the size prop.
        </Typography>
        <AdjustImage />
      </Box>
      <Divider />
      <Box>
        <Typography variant="h5">Task 3</Typography>
        <Typography variant="subtitle1" color="#676767">
          Extract a Card component from the markup below, and use the children prop to pass different JSX to it
        </Typography>
        <PassingJsx />
      </Box>
    </>
  )
}

