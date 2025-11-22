import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Bar } from './Bar';
import { Tasks } from './Tasks';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});




function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container disableGutters>
        <Bar />
        <Tasks />
      </Container>
    </ThemeProvider>
  );
};

export default App;
