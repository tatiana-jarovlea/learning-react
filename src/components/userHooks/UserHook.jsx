import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'

const GetUsersHooks = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/users/?limit=20')
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.users)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      {isLoading ? <p>Loading...</p> : null}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {users.map((user) => (
          <>
            <ListItem key={user.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.firstName + ' ' + user.lastName} src={'https://google.com'} />
              </ListItemAvatar>

              <ListItemText
                primary={user.firstName + ' ' + user.lastName + user.maidenName}
                secondary={
                  <Fragment>
                    <Typography component="span" variant="body2" sx={{ color: 'text.primary', display: 'inline' }}>
                      {user.company.title + ''}
                    </Typography>
                    {' — Contact: ' + user.email}
                  </Fragment>
                }
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </>
  )
}

export const UserHook = () => {
  return (
    <>
      <GetUsersHooks />
    </>
  )
}

