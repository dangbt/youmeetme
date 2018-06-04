import React from 'react';
import styled from 'styled-components'
import ChatroomPreview from './ChatroomPreview.jsx'
import List from '@material-ui/core/List';

const ListWrapper = styled(List)`
  border: 1px solid black;
  padding: 0px;
`

export default ({
  chatRooms,
  onEnterChatroom,
  joinRoom,
  user
}) => (
  <div>
     <ListWrapper>
    {
     chatRooms && chatRooms.map(chatroom => (
        <ChatroomPreview
          key={chatroom._id}
          user={user}
          chatroom={chatroom}
          onEnter={() => onEnterChatroom(chatroom._id)}
        />
      ))
    }
     </ListWrapper>
   
  </div>
)
