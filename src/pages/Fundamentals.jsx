import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { CustomTabPanel } from 'components/utils/customTabPanel'
import { ReactFundamentalsTask } from 'components/reactFundamentals/ReactFundamentalsTask'
import { PassingProps } from 'components/reactFundamentals/passingProps/PassingProps'
import { ConditionalRendering } from 'components/reactFundamentals/conditionalRendering/ConditionalRendering'
import { RenderingLists } from 'components/reactFundamentals/renderingLists/RenderingLists'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Passing Props" {...a11yProps(0)} />
          <Tab label="Conditional Rendering" {...a11yProps(1)} />
          <Tab label="Rendering Lists" {...a11yProps(2)} />
          <Tab label="Individual Task" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PassingProps />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <ConditionalRendering />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <RenderingLists />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <Box>
          <Typography variant="h5">Task 1</Typography>
          <Typography variant="subtitle1" color="#676767">
            Build a user profile list app: create an array with users (id, name, age, location, occupation) and display
            the list of users
          </Typography>
          <ReactFundamentalsTask />
        </Box>
      </CustomTabPanel>
    </Box>
  )
}

const Fundamentals = () => {
  return (
    <>
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h2" align="center">
          Fundamentals
        </Typography>
        <BasicTabs />
      </Box>
    </>
  )
}

export default Fundamentals

