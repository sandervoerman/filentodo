import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import type { EditorState, Task, TaskDetails } from "../model/tasks";
import { TaskRow } from "./TaskRow";


export const TaskListPanel = ({
  editorState, onCreateTask, onSelectTask, onUpdateTask, onDeleteTask
}: {
  editorState: EditorState,
  onCreateTask: (details: TaskDetails) => void,
  onSelectTask: (id: string) => void,
  onUpdateTask: (task: Task) => void,
  onDeleteTask: (id: string) => void,
}) => {
  const { tasks, selectedTaskId } = editorState;
  return (
    <Stack spacing={1} divider={<Divider />}>
      {tasks.map((task) => (
        <TaskRow
          key={task.id}
          details={task}
          selected={task.id === selectedTaskId}
          onSelect={() => onSelectTask(task.id)}
          onUpdate={(details) => onUpdateTask({ id: task.id, ...details })}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </Stack>
  );
};
