// Create a simple counter app using state variable and example with using object state variable

import { useState } from 'react'
import { Button } from '@mui/material'

export const Counter = () => {
  const [count, addCount] = useState(0)
  const handleClick = () => addCount(count + 1)

  const counterValues = { age: 0 }
  const [objectCount, addObjectCount] = useState(counterValues.age)
  const handleObjectClick = () => addObjectCount(objectCount + 1)

  return (
    <>
      <p>Create a simple counter app using state variable and example with using object state variable</p>
      <p>
        Add +1 to count <i>integer version</i>
      </p>
      <Button onClick={handleClick} variant="contained">
        Add {count}
      </Button>
      <br />
      <br />
      <p>
        Add +1 to count <i>object version</i>
      </p>
      <Button onClick={handleObjectClick} variant="contained">
        Add {objectCount}
      </Button>
    </>
  )
}

