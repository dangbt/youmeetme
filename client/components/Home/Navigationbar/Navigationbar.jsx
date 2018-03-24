import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navigationbar extends Component {

  render(){
    return (
      <div>
        <div> Navigationbar componentsss</div>
        <h1>Thông báo</h1>
        <h1>Một nửa</h1>
        <Link to='/newfriend'>Ai mới</Link><br></br>
        <h1>Ảnh mới</h1>
        <h1>Ai thích tôi</h1>
      </div>
    )
  }
}
