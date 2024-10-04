import Profile from '../reactFundamentals/ReactFundamentalsTask'
import { useState } from 'react'
import Switch from '@mui/material/Switch'

export const HiddenUsers = () => {
  const [isChecked, setCheckedUsers] = useState(false)

  const handleChange = () => {
    setCheckedUsers(!isChecked)
  }

  return (
    <div>
      <Switch checked={isChecked} onChange={handleChange} />
      {isChecked && <Profile />}
    </div>
  )
}

