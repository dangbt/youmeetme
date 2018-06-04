import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

import FullScreen from './FullScreen.jsx';
import Overlay from './Overlay.jsx';
import { Row, Col } from 'reactstrap';

const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
  z-index: 1;
`
const Center = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;
  padding: 40px 0;
  height: 100%;
  box-sizing: border-box;
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20px;
  height: 100%;
`

const BackgroundImage = styled.div`
  background: url(${props => props.src}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
`

const AvatarWrapper = styled.div`
cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
  }
  img {
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 10px 2px;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

const Relative = styled.div`
  position: relative;
`

const Sticky = styled.div`
  /* position: fixed; */
`
const UserName = styled.p`
  font-size: 24px;
  height: 27px;
  text-align: center;
  color: black;
`

function renderAvatar(user) {
  const props = user
    ? { src: user.avatar ? user.avatar : '../../../assets/default-avatar.png' }
    : {
      icon:
        <FontIcon
          style={{ fontSize: 96 }}
          className="material-icons"
        >
          {'perm_identity'}
        </FontIcon>
    }

  return <Avatar size={160} {...props} />
}

function fullName(user) {
  return user ? `${user.fullName} ` : 'Who are you?'
}

export default ({ children, user }) => (
  <FullScreen>
    <ContentWrapper>
      <Center>
        <Content>
          <Row className='w-100 '>
            <Col xs='2' ><Relative>
              <Sticky>
                <AvatarWrapper>
                  <Link to="/chat">
                    {renderAvatar(user)}
                  </Link>
                  <UserName> {fullName(user)} </UserName>
                </AvatarWrapper>
              </Sticky>
            </Relative></Col>
            <Col  xs='10' >{children}</Col>
          </Row>
        </Content>
      </Center>
    </ContentWrapper>
    <FullScreen>
      <BackgroundImage
        // src="background.jpg"
        alt='backround main' />
      <Overlay
        opacity={0.4}
        background="#212121"
      />
    </FullScreen>
  </FullScreen>
)
