import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render(){
   
    return (
      <div>
        <h1> App component</h1>
        <Link to='/login'>Log in</Link>       
      </div>
      )
    }

}
