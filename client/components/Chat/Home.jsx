import React from 'react';
import styled from 'styled-components'
import ChatroomPreview from './ChatroomPreview.jsx'
import List from '@material-ui/core/List';

const ListWrapper = styled(List)`
  border: 1px solid black;
  padding-bottom: 0px !important;

`;
const H3 = styled.h3`
  text-align: center;
`;

export default ({
  chatRooms,
  onEnterChatroom,
  joinRoom,
  user,
  onClick
}) => (
  <div>
     <ListWrapper>
    {
     chatRooms.length > 0 ? chatRooms.map(chatroom => (
        <ChatroomPreview
          key={chatroom._id}
          user={user}
          chatroom={chatroom}
          onEnter={() => onEnterChatroom(chatroom._id)}
        />
      )) 
      : 
      ( 
        <H3>Tạo phòng để cùng có thể trò chuyện với bạn !<H3 onClick={onClick} style={{color: 'blue', cursor: 'pointer'}} >Click</H3> </H3>
      )
    }
     </ListWrapper>
   
  </div>
)
