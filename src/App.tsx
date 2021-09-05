import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './helpers';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { ListScreen } from './screens/ListScreen';

interface StateTasks {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<StateTasks[]>([
    {
      id: 1,
      text: 'Finish JS test',
      day: '04-09-2021',
      reminder: true,
    },
    {
      id: 2,
      text: 'Cancel Movistar',
      day: '04-09-2021',
      reminder: true,
    },
    {
      id: 3,
      text: 'Progress on English App',
      day: '04-09-2021',
      reminder: true,
    },
  ]);

  console.log(tasks.length);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ListScreen />
        </Route>
        <Route path="/focus">
          <div>Focus View</div>
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
