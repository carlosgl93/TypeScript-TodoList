import React from 'react';
import { TasksProps } from '../types';

type Props = TasksProps & {};

const FocusScreen: React.FC<Props> = ({
  shuffleFocusedTask,
  focusedTask: task,
  updateTaskCompletion,
}) => {
  const handleMarkCompleted = () => {
    updateTaskCompletion(task!.id, true);
  };

  const handleNopeClick = () => {
    shuffleFocusedTask();
  };

  return task ? (
    <div>
      {task.label}
      <button onClick={handleMarkCompleted}>Mark completed</button>
      <button onClick={handleNopeClick}>nope</button>
    </div>
  ) : (
    <div> No incomplete tasks. </div>
  );
};

export default FocusScreen;
