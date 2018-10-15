import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Point Sheet Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
      {/* <Link to={'./new'}>
        <button variant="raised">
            New Point Sheet
        </button>
      </Link>
      <Link to={'./input'}>
        <button variant="raised">
           Point Sheet Input Page
        </button>
      </Link> */}
      <Link to={'./point'}>
        <button variant="raised">
           Point Sheet Input Page
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;
