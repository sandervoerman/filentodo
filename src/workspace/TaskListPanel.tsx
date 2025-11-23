import type { Task, TaskDetails } from "../model/tasks";
import { TaskRow } from "./TaskRow";


export const TaskListPanel = ({
  tasks, onCreateTask, onUpdateTask, onDeleteTask
}: {
  tasks: Task[],
  onCreateTask: (details: TaskDetails) => void,
  onUpdateTask: (task: Task) => void,
  onDeleteTask: (id: string) => void,
}) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskRow
          key={task.id}
          details={task}
          onUpdate={(details) => onUpdateTask({ id: task.id, ...details })}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </>
  );
};
