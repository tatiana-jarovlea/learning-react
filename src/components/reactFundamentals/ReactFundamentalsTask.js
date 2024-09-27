// Build a user profile list app:
// create an array with users (id, name, age, location, occupation) and display the list of users

import { users } from './data.js'

function UserProfile(){
  const usersData = users.map(user => 
    <>
      <li key= {user.id}>
          <p> <b>{user.name}</b> </p>
          <p> Age: <i>{user.age}</i> </p>
          <p> Lives in <i>{user.location}</i> </p>
          <p> Current occupation: <i>{user.occupation}</i> </p>
          <br/>
      </li>
    </>
  );

  return (usersData);
}


export default function Profile() {
  return (
    <div>
          <h1>Users Data:</h1>
          <ul>
            <UserProfile/>
          </ul>
    </div>
  );
}