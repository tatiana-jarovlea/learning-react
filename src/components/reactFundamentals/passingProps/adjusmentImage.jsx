// Task 2 - Change the Avatar component to request the closest image size based on the size prop.
import { getImageUrlByPersonAndSize } from './utils.js'

function Avatar({ person, size }) {
  let imageSize = size > 90 ? 'b' : 's'
  return (
    <img
      className="avatar"
      src={getImageUrlByPersonAndSize(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export default function Profile() {
  return (
    <Avatar
      size={120}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP',
      }}
    />
  )
}

