import './App.css';
import Nav from './Commponant/Nav'
import Landing from './layout/Landing'
import ToDoList from './layout/ToDoList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App" >
        <Nav />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/toDoList" component={ToDoList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
