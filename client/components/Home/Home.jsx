import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import TabHome from './TabHome.jsx'
import Slide from '../SlideAdvertisement/Slide.jsx'
import './Home.scss'
import checkAuthenticate from '../Function/checkAuthenticate';
import  Footer  from '../Footer/footer'



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
        <Sidebar  user={user} >
          <Slide />
          <TabHome user={user} />
        </Sidebar>
        <Footer />
      </div>  
    )
  }
}
