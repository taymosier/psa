import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import List from './Views/List';
import PointSheetNew from './Views/PointSheetNew';
import PointSheetInput from './Views/PointSheetInput';



class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route path='/new' component={PointSheetNew}/>
          <Route path='/input' component={PointSheetInput}/>
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
