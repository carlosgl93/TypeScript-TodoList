import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './helpers';
import { ListScreen } from './screens/ListScreen';

interface StateTasks {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

const App: React.FC = () => {
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
