import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Task, TasksProps } from '../types';

type Props = TasksProps & {};

export const ListScreen: React.FC<Props> = ({
  addTask,
  tasks,
  setTasks,
  updateTaskCompletion,
}) => {
  // set new task hook
  const [newTaskLabel, setNewTaskLabel] = useState('');
  // input handler
  const handleNewTaskLabelChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);
  // on key press down actions
  const handleNewTaskKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      addTask({ label: newTaskLabel });
      setNewTaskLabel('');
    }
  };
  // handling the checked box of each task
  // define a function that returns a function that checks the id of the task handled vs the task iterated
  const handleCompleteChange =
    (task: Task) => (e: React.ChangeEvent<HTMLInputElement>) => {
      updateTaskCompletion(task.id, e.target.checked);
    };

  // function to clear all completed tasks
  // call the tasks hook and filter to keep the ones that are not completed
  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));
  };

  // function to delete a task
  const handleTaskDeleteClick = (handleTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handleTask.id));
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
            <button onClick={handleTaskDeleteClick(task)}>Delete</button>
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
