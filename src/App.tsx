import type { Task } from './model/tasks';
import { useReducer } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { taskReducer } from './model/tasks';
import { Bar } from './Bar';
import { TaskListPanel } from './workspace/TaskListPanel';


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
];


function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container disableGutters>
        <Bar />
        <TaskListPanel
          tasks={tasks}
          onCreateTask={(details) => dispatch({ type: 'create', details })}
          onUpdateTask={(task) => dispatch({ type: 'update', task })}
          onDeleteTask={(id) => dispatch({ type: 'delete', id })}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
