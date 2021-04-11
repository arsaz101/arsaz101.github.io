import React from 'react'
import '../styles/Chat.css'
// import { useParams } from 'react-router-dom'
import { starBorderOutlinedIcon, infoOutlinedIcon } from '../constants/Icons'

function Chat() {
  //   const { roomId }: any = useParams()
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#general</strong>
            {starBorderOutlinedIcon()}
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>{infoOutlinedIcon()} Details</p>
        </div>
      </div>
    </div>
  )
}

export default Chat
