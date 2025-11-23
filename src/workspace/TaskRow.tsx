import { Box, Checkbox, Chip, Input, Stack } from "@mui/material";
import type { TaskDetails } from "../model/tasks";


export const TaskRow = ({ details, onUpdate, onDelete }: {
  details: TaskDetails,
  onUpdate: (details: TaskDetails) => void,
  onDelete: () => void,
}) => {
  return (
    <Stack direction='row'>
      <Checkbox
        checked={details.completed}
        onChange={
          (event) => onUpdate({ ...details, completed: event.target.checked })
        }
      />
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ border: '1px solid gray', flex: 1 }}>
        <Input
          value={details.title}
          onChange={
            (event) => onUpdate({ ...details, title: event.target.value })
          }
          disableUnderline={true}
          fullWidth
        />
        <Stack direction='row' sx={{ border: '1px solid gray' }}>
          {details.contexts.map((context) => <Chip key={context} label={context} />)}
          {details.projects.map((project) => <Chip key={project} label={project} />)}
        </Stack>
      </Stack>
    </Stack>
  );
};

