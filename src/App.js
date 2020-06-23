import React from 'react';
import { USE_STATE, USE_EFFECT } from './routes'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import UseStateCounter from './components/UseStateCounter'
import UseEffectFriendInfo from './components/UseEffectFriendInfo'

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Side-bar">
          <ul>
            <li><Link to={USE_STATE}>use state</Link></li>
            <li><Link to={USE_EFFECT}>use effect</Link></li>
          </ul>
        </div>
        <div className="Content">
          <Switch>
            <Route path={USE_STATE}>
              <UseStateCounter />
            </Route>
            <Route path={USE_EFFECT}>
              <UseEffectFriendInfo />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
