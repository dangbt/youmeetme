import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import ListItem from './ListItem/ListItem.jsx';
import TabHome from './TabHome/TabHome.jsx'
import Slide from '../SlideAdvertisement/Slide.jsx'
import './Home.scss'
import checkAuthenticate from '../Function/checkAuthenticate'


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticate: true,
      user: {},
    }
  }

  checkAuth = () => {
    checkAuthenticate().then((response) => {
      this.setState({
        authenticate: response.authentication,
        user: response.data
      })
      

    })
  }
  componentDidMount() {
    this.checkAuth();
  }
  render(){
    const { authenticate , user} = this.state;
    if (!authenticate) {
      return (
        <Redirect to={'/login'}></Redirect>
      )
    }
    return (
      <div className='home-page'>
        <Sidebar  user={user} />
        <Slide />
        <TabHome />
        <footer style={{ height: '100px' }}></footer>
      </div>  
    )
  }
}
