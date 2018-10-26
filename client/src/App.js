import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import List from './Views/List';
import PointSheetPoint from './Views/PointSheetPoint';
import PointSheetInput from './Views/PointSheetInput';
import PointSheet from './Views/PointSheet';


// TODO
// Write submitButton handler
// - convert inputs into json data
// Send json data to python script
// - write js file to receive data first
// - send data as response through express
// - check to ensure inputs are valid
// - create python child process
// - input json data as arguments
// - - separate different input sections as separate arguments

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          {/* <Route path='/new' component={PointSheetPoint}/> */}
          {/* <Route path='/input' component={PointSheetInput}/> */}
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
