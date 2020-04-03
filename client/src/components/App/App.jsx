import React from 'react';
import './App.scss';
import './../../style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Settings from '../Settings/Settings';
import BuildHistory from '../BuildHistory/BuildHistory';
import BuildDetails from '../BuildDetails/BuildDetails';
import StartScreen from '../StartScreen/StartScreen';


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
