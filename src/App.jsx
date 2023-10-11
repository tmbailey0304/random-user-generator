import { useEffect, useState } from 'react'
import './App.css'

import {Typography, Container, Button, Box, Card, CardMedia} from '@mui/material'

function App() {
  const [user, setUser] = useState([])
  const [newUser, setNewUser] = useState(false)

  useEffect(() => {
    fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      setUser(data)
      console.log(data.results[0])
    })
  }, [newUser])

  return (
    <>
      <Container>
        <Card sx={{ width: '400px', height: '400px' }}>
          {user.results &&
            <>
              <Box display="flex" justifyContent="center" alignItems="center" sx={{backgroundColor:'#6488ea', marginBottom:'20px', paddingTop:'10px'}}>
                <CardMedia component="img" image={user.results[0].picture.large} sx={{ height: '128px', width: '128px', borderRadius: '50%', paddingBottom: '20px' }} />
              </Box>
              <Box sx={{ textAlign: 'left', padding: '0 20px' }}>
                <Typography>Name: {user.results[0].name.first} {user.results[0].name.last}</Typography>
                <Typography>Age: {user.results[0].dob.age}</Typography>
                <Typography>Gender: {user.results[0].gender}</Typography>
                <Typography>Origin: {user.results[0].location.country}</Typography>
                <Typography>Phone Number: {user.results[0].phone}</Typography>
                <Typography>Email: {user.results[0].email}</Typography>
              </Box>
              <Button variant='contained' sx={{margin:'20px'}} onClick={() => setNewUser(!newUser)}>Generate New User</Button>
            </>
          }
        </Card>
      </Container>
    </>
  )
}


export default App
