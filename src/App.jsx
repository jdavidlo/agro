
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './temaConfig'
import Contenedor from './Components/Contenedor';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor/>
    </ThemeProvider>    
  );
}

export default App;
