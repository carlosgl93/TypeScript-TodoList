import Task from './Task'
import React from 'react'

interface TypeTask {
    id: number,
    text: string,
    day: string,
    reminder: boolean,
}

interface Props {
    tasks: TypeTask[],
    onDelete: (id: number, event?: React.MouseEvent<HTMLButtonElement>) => any,
    onToggle: (id: number, event?: React.MouseEvent<HTMLButtonElement>) => any,
}

const Tasks: React.FC<Props> = ({ tasks, onDelete, onToggle}) => {
    
    return (
        <>
        {tasks.map((task: TypeTask) => {            
            return <Task 
                        key={task.id} 
                        task={task} 
                        onDelete={onDelete(task.id)} 
                        onToggle={onToggle(task.id)}/>                    
        })}
        </>
    )
}


export default Tasks
