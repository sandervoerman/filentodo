import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Stack from '@mui/material/Stack';
import type { TaskDetails } from "../model/tasks";


export const TaskRow = ({ details, selected, onSelect, onUpdate, onDelete }: {
  details: TaskDetails,
  selected: boolean,
  onSelect: () => void,
  onUpdate: (details: TaskDetails) => void,
  onDelete: () => void,
}) => {

  return (
    <Stack
      direction='row'
      sx={{ alignItems: 'flex-start'}}
      onFocus={onSelect}
    >
      <Checkbox
        checked={details.completed}
        onChange={
          (event) => onUpdate({ ...details, completed: event.target.checked })
        }
      />
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ flex: 1 }}>
        <Input
          value={details.title}
          onChange={
            (event) => onUpdate({ ...details, title: event.target.value })
          }
          disableUnderline={true}
          fullWidth
        />
        <Stack direction='row' spacing={.5}>
          {details.contexts.map((context) => <Chip key={context} label={`@${context}`} />)}
          {details.projects.map((project) => <Chip key={project} label={`+${project}`} />)}
          {selected && (
            <IconButton aria-label="delete" size="small" color="error" onClick={onDelete}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

