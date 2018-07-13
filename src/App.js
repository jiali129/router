import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import Account from './pages/account'
// import Choose from './pages/choose'
// import Detail from './pages/detail'
// import Fill from './pages/fill'
// import Login from './pages/login'
// import Register from './pages/register'

import RouterView from './router/router'
import routes from './router/config'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <RouterView routes={routes}></RouterView>
          {/* <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/choose' component={Choose}></Route>
          <Route path='/detail' component={Detail}></Route>
          <Route path='/fill' component={Fill}></Route>
          <Route path='/account' component={Account}></Route>
          <Route path='/register' component={Register}></Route>
          </Switch> */}
        </Router>
      </div>
    );
  }
}

export default App;
