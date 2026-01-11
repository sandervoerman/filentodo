export interface TaskDetails {
  title: string;
  completed: boolean;
  contexts: string[];
  projects: string[];
}

export interface Task extends TaskDetails {
  id: string;
}

export type EditorAction =
  | { type: 'create'; details: TaskDetails }
  | { type: 'select'; id: string }
  | { type: 'update'; task: Task }
  | { type: 'delete'; id: string };


export interface EditorState {
  tasks: Task[];
  selectedTaskId: string | null;
}


export const taskReducer = (state: EditorState, action: EditorAction): EditorState => {
  switch (action.type) {
    case 'create': {
      return {
        tasks: [...state.tasks, { id: crypto.randomUUID(), ...action.details }],
        selectedTaskId: state.selectedTaskId,
      };
    }
    case 'select': {
      return {
        tasks: state.tasks,
        selectedTaskId: action.id,
      };
    }
    case 'update': {
      return {
        tasks: state.tasks.map(
          (task) => task.id === action.task.id ? action.task : task
        ),
        selectedTaskId: state.selectedTaskId,
      };
    }
    case 'delete': {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
        selectedTaskId: state.selectedTaskId === action.id ? null : state.selectedTaskId,
      };
    }
  }
}
