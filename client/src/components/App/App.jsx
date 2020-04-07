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
import {AppRoutes} from './../../constants/AppRoutes';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path={AppRoutes.HOME} component={HomePage} exact />
          <Route path={AppRoutes.SETTINGS} component={Settings} exact />
          <Route path={AppRoutes.BUILD_ID_DETAILS} component={BuildDetails} exact />
          {/* Для целей отладки оставлены ручки: */}
          <Route path={AppRoutes.START} component={StartScreen} exact />
          <Route path={AppRoutes.BUILD_HISTORY} component={BuildHistory} exact />
        </Switch>
    </Router>
  );
}
