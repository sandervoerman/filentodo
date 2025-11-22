import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Tasks } from './Tasks';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Bar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


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
