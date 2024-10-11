import { useState } from 'react'
import Switch from '@mui/material/Switch'
import { ReactFundamentalsTask } from 'components/reactFundamentals/ReactFundamentalsTask'

export const HiddenUsers = () => {
  const [isChecked, setCheckedUsers] = useState(true)

  const handleChange = () => {
    setCheckedUsers(!isChecked)
  }

  return (
    <div>
      <Switch checked={isChecked} onChange={handleChange} />
      {isChecked && <ReactFundamentalsTask />}
    </div>
  )
}

