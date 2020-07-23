import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import LoggedIn from './loggedin';

function App() {
    return (
      <Router>
        <Switch >
            <Route path="/" exact component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/loggedin" component={LoggedIn} />
        </Switch>
      </Router>
    );
}

export default App;
