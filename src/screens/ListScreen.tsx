import React, { ChangeEventHandler, useState } from 'react';
import { nanoid } from 'nanoid';

type Props = {};

type Task = {
  id: string;
  label: string;
  isComplete: boolean;
};
export const ListScreen: React.FC<Props> = () => {
  // tasks container
  const [tasks, setTasks] = useState<Task[]>([]);
  // set new task hook
  const [newTaskLabel, setNewTaskLabel] = useState('');
  // input handler
  const handleNewTaskLabelChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);
  // on key press down actions
  const handleNewTaskKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      setTasks((task) => [
        ...tasks,
        { id: nanoid(), label: newTaskLabel, isComplete: false },
      ]);
      setNewTaskLabel('');
    }
  };
  // handling the checked box of each task
  // define a function that returns a function that checks the id of the task handled vs the task iterated
  const handleCompleteChange =
    (handledTask: Task) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === handledTask.id) {
            return { ...task, isComplete: e.target.checked };
          }
          return task;
        })
      );
    };

  // function to clear all completed tasks
  // call the tasks hook and filter to keep the ones that are not completed
  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));
  };
  console.log(tasks);

  return (
    <div>
      <ul>
        {/* insert the tasks as ul li */}
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isComplete}
              name="isComplete"
              onChange={handleCompleteChange(task)}
            />
            {task.label}
          </li>
        ))}
      </ul>
      <input
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
        type="text"
      />
      <div>
        <button onClick={handleClearClick}> Clear Completed </button>
      </div>
    </div>
  );
};
