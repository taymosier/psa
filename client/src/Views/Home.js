import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Point Sheet Home</h1>
      {/* Link to List.js */}
      <Link to={'./point'}>
        <button variant="raised">
           Point Sheet
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;
