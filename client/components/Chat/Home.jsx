import React from 'react';

import ChatroomPreview from './ChatroomPreview.jsx'

export default ({
  chatRooms,
  onEnterChatroom,
  listFriends,
  joinRoom,
  user
}) => (
  <div>
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
    {
     listFriends && listFriends.map( friend => <h1 key={friend._id} onClick={() => joinRoom(friend._id)} >{friend._id}</h1>)
    }
   
  </div>
)
