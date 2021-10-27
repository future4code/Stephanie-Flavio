import { ThemeProvider } from '@emotion/react';
import './App.css';
import { theme } from './constants/theme';
import { Router } from './Routes/Router';
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer/>
        <Router/>
    </ThemeProvider>
  );
}

export default App;
