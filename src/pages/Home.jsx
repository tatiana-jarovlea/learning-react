import { Box, Container, styled, Typography } from '@mui/material'

const HeroSection = styled(Box)({
  backgroundImage: 'url(https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
})


const Home = () => {
  return (
    <Box justifyContent="center">
      <HeroSection />
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h2" gutterBottom align="center">
          Welcome to React Learning
        </Typography>
        <Typography variant="h5" gutterBottom align="center">
          Build beautiful UIs with React and Material-UI.
        </Typography>
        <Typography variant="body1" align="center">
          This is a simple home page built with React and Material-UI. Explore the components and learn how to create
          stunning user interfaces!
        </Typography>
        <Typography variant="body1" align="center">
          Join our community and start building today!
        </Typography>
      </Container>
    </Box>
  )
}

export default Home

