import { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './helpers';
import FocusScreen from './screens/FocusScreen';
import { ListScreen } from './screens/ListScreen';
import { Task } from './types';

const App: React.FC = () => {
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

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isComplete };
        }
        return task;
      })
    );
  };

  // tasks container
  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksApi = { tasks, setTasks, updateTaskCompletion };
  return (
    <BrowserRouter>
      <nav>
        <NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>
          List
        </NavLink>{' '}
        -{' '}
        <NavLink to="/focus" activeStyle={{ fontWeight: 'bold' }}>
          Focus
        </NavLink>
      </nav>
      <br />
      <Switch>
        <Route exact path="/">
          <ListScreen {...tasksApi} />
        </Route>
        <Route path="/focus">
          <FocusScreen {...tasksApi} />
        </Route>
      </Switch>
      {/* <div className="container">
      <Header title='Your tasks'/>
      {tasks.length > 0 ?
       (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) :
        'No Tasks'}
    </div> */}
    </BrowserRouter>
  );
};

export default App;
