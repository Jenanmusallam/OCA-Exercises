import React from 'react';
import './style/App.css'
import Nav from './componant/layout/Navbar';
import Home from './componant/page/Home';
import Profile from './componant/page/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
    return (
        <Router >
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;