import React from 'react';
import './App.css';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Settings from './Settings';
import BuildHistory from './BuildHistory';
import BuildDetails from './BuildDetails';
import StartScreen from './StartScreen';


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/settings' exact>
            <Settings />
          </Route>
          <Route path='/build/:id' exact>
            
          </Route>
          {/* Для целей отладки оставлены ручки: */}
          <Route path='/start' exact>
            <StartScreen />
          </Route>
          <Route path='/build_history' exact>
            <BuildHistory />
          </Route>
          <Route path='/build_details' exact>
            <BuildDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
