import React from 'react';

import ChatroomPreview from './ChatroomPreview.jsx'

export default ({
  chatRooms,
  onEnterChatroom
}) => (
  <div>
    {
      chatRooms.map(chatroom => (
        <ChatroomPreview
          key={chatroom._id}
          chatroom={chatroom}
          onEnter={() => onEnterChatroom(chatroom._id)}
        />
      ))
    }
  </div>
)
