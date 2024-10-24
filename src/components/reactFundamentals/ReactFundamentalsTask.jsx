// Build a user profile list app:
// create an array with users (id, name, age, location, occupation) and display the list of users

import { users } from './data.js'

function UserProfile(user) {
  const { id, name, age, location, occupation } = user.user

  return (
    <li key={id}>
      <p>
        <b>{name}</b>{' '}
      </p>
      <p>
        Age: <i>{age}</i>{' '}
      </p>
      <p>
        Lives in <i>{location}</i>{' '}
      </p>
      <p>
        Current occupation: <i>{occupation}</i>{' '}
      </p>
      <br />
    </li>
  )
}

function ProfileList() {
  return (
    <div>
      <h1>Users Data:</h1>
      {users.map((user) => (
        <UserProfile user={user} key={user.id} />
      ))}
    </div>
  )
}

export const ReactFundamentalsTask = () => {
  return <ProfileList />
}

