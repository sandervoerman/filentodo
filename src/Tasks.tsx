import { Box } from '@mui/material';


const Task = () => {
  return (
    <Box>
      This Box represents a single task item.
    </Box>
  );
};


export const Tasks = () => {
  return (
    <>
      <Task />
      <Task />
      <Task />
    </>
  );
};
