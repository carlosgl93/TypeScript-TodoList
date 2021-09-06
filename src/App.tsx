import { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './helpers';
import FocusScreen from './screens/FocusScreen';
import { ListScreen } from './screens/ListScreen';
import { Task } from './types';

interface StateTasks {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

const App: React.FC = () => {
  // tasks container
  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksProps = { tasks, setTasks };
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
          <ListScreen {...tasksProps} />
        </Route>
        <Route path="/focus">
          <FocusScreen {...tasksProps} />
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
