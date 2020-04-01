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
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/settings' component={Settings} exact />
          <Route path='/build/:id' component={BuildDetails} exact />
          {/* Для целей отладки оставлены ручки: */}
          <Route path='/start' component={StartScreen} exact />
          <Route path='/build_history' component={BuildHistory} exact />
          <Route path='/build_details' component={BuildDetails} exact />
        </Switch>
    </Router>
  );
}
