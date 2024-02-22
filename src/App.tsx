import { Box, Container, Typography } from '@mui/material';

import './App.css';
import { Footer, Header } from './components';

function App() {
  return (
    <>
      <Container maxWidth="xl" component='main'>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Create React App example in TypeScript
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
