import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Views/Home';
import Psa from './Views/Psa';
import PointSheetPoint from './Views/PointSheetInventoryView/PointSheetPoint';
import PointSheetInput from './Views/PointSheetInfoView/PointSheetInput';
import PointSheet from './Views/PointSheet';



// TODO
// - check to ensure inputs are valid

class App extends Component {
  render() {
    const App = () => (
      <div className={"appContainer"}>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
