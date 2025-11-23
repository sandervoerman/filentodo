import { useReducer } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline, Box } from '@mui/material';

import type { Task } from './model/tasks';
import { taskReducer } from './model/tasks';
import { Header } from './Header';
import { TaskListPanel } from './workspace/TaskListPanel';
import { Footer } from './Footer';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const initialTasks: Task[] = [
  { id: '1', title: 'Sample Task', completed: false, contexts: ['work'], projects: ['paris'] },
  { id: '2', title: 'Sample Task', completed: false, contexts: ['work', 'home'], projects: [] },
  { id: '3', title: 'Sample Task', completed: false, contexts: [], projects: [] },
  { id: '4', title: 'Sample Task', completed: false, contexts: ['home'], projects: [] },
  { id: '5', title: 'Sample Task', completed: false, contexts: [], projects: [] },
  { id: '6', title: 'Sample Task', completed: false, contexts: ['home'], projects: [] },
  { id: '7', title: 'Sample Task', completed: false, contexts: [], projects: [] },
  { id: '8', title: 'Sample Task', completed: false, contexts: ['home'], projects: [] },
];


function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container disableGutters sx={{
        height: '100vh',
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Header/>
        <Box sx={{
          flexGrow: 1,
          border: '1px solid blue',
        }}>
          <TaskListPanel
            tasks={tasks}
            onCreateTask={(details) => dispatch({ type: 'create', details })}
            onUpdateTask={(task) => dispatch({ type: 'update', task })}
            onDeleteTask={(id) => dispatch({ type: 'delete', id })}
          />
        </Box>
        <Footer/>
      </Container>
    </ThemeProvider>
  );
};

export default App;
