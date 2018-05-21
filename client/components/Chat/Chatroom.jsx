import React from 'react';
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import Overlay from './Overlay.jsx';
import socket from './socket'
import { _helper } from '../Function/API';

const ChatWindow = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 420px;
  box-sizing: border-box;
`
const ChatPanel = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px ;
  z-index: 1;
  color: #fafafa !important;
  border-bottom: 1px solid;
`

const Title = styled.p`
  text-align: center;
  font-size: 24px;
`

const NoDots = styled.div`
  hr {
    visibility: hidden;
  }
`

const OutputText = styled.div`
  white-space: normal !important;
  word-break: break-all !important;
  overflow: initial !important;
  width: 100%;
  height: auto !important;
  color: #fafafa !important;
`

const InputPanel = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  align-self: center;
  border-top: 1px solid #fafafa;
`

const ChatroomImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
`

const Scrollable = styled.div`
  height: 100%;
  overflow: auto;
`

export default class Chatroom extends React.Component {
  constructor(props, context) {
    super(props, context)

    //const { chatHistory } = props

    this.state = {
      chatHistory : '',
      input: '',
      client: socket(),
      listMessage: []
    }

    this.onInput = this.onInput.bind(this)
    this.onSendMessage = this.onSendMessage.bind(this)
    this.onMessageReceived = this.onMessageReceived.bind(this)
    this.updateChatHistory = this.updateChatHistory.bind(this)
    this.scrollChatToBottom = this.scrollChatToBottom.bind(this)
  }

  componentDidMount() {
   // this.props.registerHandler(this.onMessageReceived)
   this.scrollChatToBottom()

    _helper.fetchAPI('/messages/byRoom',
     {roomID:  this.props.chatroom._id}, [], 'POST'
    )
    .then((response) => {
      const { data, status } = response;
      if( status == 200 && data.result == 1 ) {
          this.setState({ listMessage : data.data})
       
      }
      
    })
  }

  componentDidUpdate() {
    this.scrollChatToBottom()
  }

  componentWillUnmount() {
    //this.props.unregisterHandler()
  }

  onInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  onSendMessage() {
    const { input } = this.state;
    if (!input)
      return
      
      
      debugger
    return this.state.client.message(input, this.props.roomName)
  }
  onLeave =  () => {
    return this.state.client.leave()
  }

  onMessageReceived(entry) {
    console.log('onMessageReceived:', entry)
    this.updateChatHistory(entry)
  }

  updateChatHistory(entry) {
    this.setState({ chatHistory: this.state.chatHistory.concat(entry) })
  }

  scrollChatToBottom() {
    this.panel.scrollTo(0, this.panel.scrollHeight)
  }

  render() {
    const { listMessage } = this.state;
    console.log(this.state.listMessage)
    return (
      <div style={{ height: '100%', background: 'black', opacity: 0.7 }}>
        <ChatWindow>
          <Header>
            <Title>
              {/* { this.props.chatroom.name } */}
            </Title>
            <Link to='chat'>
            <RaisedButton
              primary
              icon={
                <FontIcon
                  style={{ fontSize: 24 }}
                  className="muidocs-icon-action-home"
                >
                  {'close'}
                </FontIcon>
              }
              onClick={this.onLeave}
            />
            </Link>
          </Header>
          <ChatroomImage
            // src={this.props.chatroom.image}
            alt=""
          />
          <ChatPanel>
            <Scrollable innerRef={(panel) => { this.panel = panel }}>
              <List>
                {
                  listMessage &&  listMessage.reduceRight((arr, last) => arr.concat(last), []).map(
                    ({ senderID, content, event }, i) => [
                      <NoDots>
                        <ListItem
                          key={i}
                          style={{ color: '#fafafa' }}
                          leftAvatar={<Avatar src={senderID.avatar ? senderID.avatar : '../../../../assets/default-avatar.png'} />}
                          primaryText={`${senderID.info.fullName} ${event || ''}`}
                          secondaryText={
                            content &&
                            <OutputText>
                              { content }
                            </OutputText>
                          }
                        />
                      </NoDots>,
                      <Divider inset />
                    ]
                  )
                }
              </List>
            </Scrollable>
            <InputPanel>
              <TextField
                textareaStyle={{ color: '#fafafa' }}
                hintStyle={{ color: '#fafafa' }}
                floatingLabelStyle={{ color: '#fafafa' }}
                hintText="Enter a message."
                floatingLabelText="Enter a message."
                multiLine
                rows={4}
                rowsMax={4}
                onChange={this.onInput}
                value={this.state.input}
                onKeyPress={e => (e.key === 'Enter' ? this.onSendMessage() : null)}
              />
              <FloatingActionButton
                onClick={this.onSendMessage}
                style={{ marginLeft: 20 }}
              >
                <FontIcon
                  style={{ fontSize: 32 }}
                  className="material-icons"
                >
                  {'chat_bubble_outline'}
                </FontIcon>
              </FloatingActionButton>
            </InputPanel>
          </ChatPanel>
          <Overlay
            opacity={0.6}
            background="#111111"
          />
        </ChatWindow>
      </div>
    )
  }
}