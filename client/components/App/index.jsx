import React, {Component} from 'react';
import { Computer, FavoriteBorder, Create, TrendingFlat } from '@material-ui/icons'
import { Header, BtnLogin, Container, BtnWrapper, HeaderWrapper, LinkWrapper } from './styled';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render(){
   
    return (
      <Container>
        <Header  justify animation >Welcome to YOU MEET ME<FavoriteBorder style={{fontSize: '2.5rem'}}/><Computer style={{fontSize: '2.5rem'}}/></Header>
        <div>
          <HeaderWrapper>
            <Header h2><Computer  style={{fontSize: '2.5rem'}} /> HẸN HÒ ONLINE NGHIÊM TÚC <FavoriteBorder style={{fontSize: '2.5rem'}} /></Header>
            <Header h2>MIỄN PHÍ ĐĂNG KÝ, TRÒ CHUYỆN DỄ DÀNG</Header>
          </HeaderWrapper>
          <BtnWrapper>
            <LinkWrapper to='/login'><BtnLogin color="danger" >Log in<TrendingFlat/></BtnLogin></LinkWrapper>    
            <LinkWrapper to='/create-account'><BtnLogin color="primary" marginleft='true' >Sign up<Create/></BtnLogin></LinkWrapper>  
          </BtnWrapper>
        </div>  
      </Container>
      )
    }

}
