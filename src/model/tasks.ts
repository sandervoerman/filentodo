export interface TaskDetails {
  title: string;
  completed: boolean;
  contexts: string[];
  projects: string[];
}

export interface Task extends TaskDetails {
  id: string;
}

export type TaskAction =
  | { type: 'create'; details: TaskDetails }
  | { type: 'update'; task: Task }
  | { type: 'delete'; id: string };

  
export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'create': {
      return [...state, { id: crypto.randomUUID(), ...action.details }];
    }
    case 'update': {
      return state.map(
        (task) => task.id === action.task.id ? action.task : task
      );
    }
    case 'delete': {
      return state.filter((task) => task.id !== action.id);
    }
  }
}
