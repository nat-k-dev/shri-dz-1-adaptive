import React from 'react';
import './App.css';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import StartScreen from './StartScreen';
import Settings from './Settings';
import BuildHistory from './BuildHistory';
import BuildDetails from './BuildDetails';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/settings'>
            <Settings />
          </Route>
          <Route path='/build_history'>
            <BuildHistory />
          </Route>
          <Route path='/build_details'>
            <BuildDetails />
          </Route>
          <Route path='/'>
            <StartScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
