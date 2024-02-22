import { Box, Container, Typography } from '@mui/material';

import './App.css';
import { Footer, Header } from './components';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" component='main'>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Create React App example in TypeScript
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
