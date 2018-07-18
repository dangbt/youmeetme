import React from 'react';
import styled from 'styled-components'
import List from '@material-ui/core/List';
import ChatroomPreview from './ChatroomPreview.jsx'

const ListWrapper = styled(List)`
  border: 1px solid black;
  padding-bottom: 0px !important;

`;
const H3 = styled.h3`
  text-align: center;
`;
const Div = styled.div`
  text-align: center;
  font-size: 25px;
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
        <Div>Tạo phòng để cùng trò chuyện với bạn !
          <H3 onClick={onClick} style={{color: 'blue', cursor: 'pointer'}} >Click</H3> 
        </Div>
      )
    }
     </ListWrapper>
   
  </div>
)
