import { Box, Divider, Typography } from '@mui/material'
import { FlagRendering } from './FlagRendering'
import { PackingList } from './ShowItemsImportance'
import { DrinkList } from './RefactoringSeries'

export const ConditionalRendering = () => {
  return (
    <>
      <Box>
        <Typography variant="h5">Task 1</Typography>
        <Typography variant="subtitle1" color="#676767">
          Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn&apos;t true.
        </Typography>
        <FlagRendering />
      </Box>

      <Divider />

      <Box>
        <Typography variant="h5">Task 2</Typography>
        <Typography variant="subtitle1" color="#676767">
          Show the item importance with &&
        </Typography>
        <PackingList />
      </Box>

      <Divider />

      <Box>
        <Typography variant="h5">Task 3</Typography>
        <Typography variant="subtitle1" color="#676767">
          Refactor a series of ? : to if and variables
        </Typography>
        <DrinkList />
      </Box>
    </>
  )
}
