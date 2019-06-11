import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Character from './Components/Character';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/Home" component={Home} exact />
          <Route path="/Character" component={Character} />
        </Switch>
      </div>
    </BrowserRouter>
     </div>
  );
}

export default App;