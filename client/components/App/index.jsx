import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (
      <div>
        <h1> App component</h1>
        <button >Click me</button>
        <Link to='/home'>home</Link>
      </div>

    )
  }
}
