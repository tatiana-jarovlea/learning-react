import { Box, Divider, Typography } from '@mui/material'
import { SplitList } from './SplittingLIst'
import { NestedRecipeList } from './NestedList'
import { RecipeList } from './ListItemExtraction'
import { SeparatorList } from './SeparatorList'

export const RenderingLists = () => {
  return (
    <>
      <Box>
        <Typography variant="h5">Task 1</Typography>
        <Typography variant="subtitle1" color="#676767">
          Splitting a list in two
        </Typography>
        <SplitList />
      </Box>

      <Divider />

      <Box>
        <Typography variant="h5">Task 2</Typography>
        <Typography variant="subtitle1" color="#676767">
          Nested lists in one component
        </Typography>
        <NestedRecipeList />
      </Box>

      <Divider />

      <Box>
        <Typography variant="h5">Task 3</Typography>
        <Typography variant="subtitle1" color="#676767">
          Extracting a list item component
        </Typography>
        <RecipeList />
      </Box>

      <Divider />

      <Box>
        <Typography variant="h5">Task 4</Typography>
        <Typography variant="subtitle1" color="#676767">
          Extracting a list item component
        </Typography>
        <SeparatorList />
      </Box>
    </>
  )
}
