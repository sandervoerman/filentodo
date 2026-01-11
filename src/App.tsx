import { useReducer } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

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

const initalState = {
  tasks: initialTasks,
  selectedTaskId: null,
};


function App() {
  const [editorState, dispatch] = useReducer(taskReducer, initalState);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container disableGutters sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Header/>
        <Box sx={{ flexGrow: 1 }}>
          <TaskListPanel
            editorState={editorState}
            onCreateTask={(details) => dispatch({ type: 'create', details })}
            onSelectTask={(id) => dispatch({ type: 'select', id })}
            onUpdateTask={(task) => dispatch({ type: 'update', task })}
            onDeleteTask={(id) => dispatch({ type: 'delete', id })}
          />
        </Box>
        <Footer/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
