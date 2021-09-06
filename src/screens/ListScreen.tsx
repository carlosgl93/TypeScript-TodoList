import React, { useState } from 'react';
import { nanoid } from 'nanoid';

type Props = {};

type Task = {
  id: string;
  label: string;
};
export const ListScreen: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTaskLabelChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handleNewTaskKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      setTasks((task) => [...tasks, { id: nanoid(), label: newTaskLabel }]);
      setNewTaskLabel('');
    }
  };
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>
      <input
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
        type="text"
      />
    </div>
  );
};
