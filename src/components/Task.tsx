import React from 'react'
import { FaTimes } from 'react-icons/fa'

interface SelectedTask {
    id: number,
    text: string,
    day: string,
    reminder: boolean,
}

interface Props {
    task: SelectedTask,
    onDelete: (id: number, event?: React.MouseEvent<HTMLButtonElement>) => any,
    onToggle: (id: number, event?: React.MouseEvent<HTMLButtonElement>) => any,
}

const Task: React.FC<Props> = ({ onDelete, onToggle, task}) => {
    return (
        <div className='task' onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} 
                <FaTimes style={{
                color: 'red', cursor: 'pointer'}} 
                onClick={() => onDelete(task.id)}
                
            
            />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
