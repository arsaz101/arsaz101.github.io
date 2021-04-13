import React, { useEffect, useState } from 'react'
import '../styles/Chat.css'
import { useParams } from 'react-router-dom'
import { starBorderOutlinedIcon, infoOutlinedIcon } from '../constants/Icons'
import db from '../database/firebase'
import Message from './Message'

function Chat() {
  const { roomId }: any = useParams()
  const [roomDetails, setRoomDetails]: any = useState(null)
  const [roomMessages, setRoomMessages]: any = useState([])

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot: any) => setRoomDetails(snapshot.data()))
    }

    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp')
      .onSnapshot((snapshot: any) =>
        setRoomMessages(snapshot.docs.map((doc: any) => doc.data())),
      )
  }, [roomId])

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            {starBorderOutlinedIcon()}
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>{infoOutlinedIcon()} Details</p>
        </div>
      </div>
      <div className="chat_messages">
        {roomMessages?.map(({ message, timestamp, user, userImage }: any) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
    </div>
  )
}

export default Chat
