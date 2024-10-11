import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { CustomTabPanel } from 'components/utils/customTabPanel'
import { HiddenUsers } from 'components/useStateRendering/HiddenUsers'
import { CounterRendering } from 'components/useStateRendering/CounterRendering'
import { Typography } from '@mui/material'

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
          <Tab label="Counter Rendering" {...a11yProps(0)} />
          <Tab label="Hidden Users" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CounterRendering />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <HiddenUsers />
      </CustomTabPanel>
    </Box>
  )
}

const Rendering = () => {
  return (
    <>
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h2" align="center">
          Rendering
        </Typography>
        <BasicTabs />
      </Box>
    </>
  )
}

export default Rendering

