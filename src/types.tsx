export type Task = {
  id: string;
  label: string;
  isComplete: boolean;
};

export type TasksProps = {
  addTask: (task: Pick<Task, 'label'>) => void;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  updateTaskCompletion: (taskId: string, isComplete: boolean) => void;
  focusedTask?: Task;
  shuffleFocusedTask: () => void;
};
