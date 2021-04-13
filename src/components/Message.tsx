import React from 'react'
import { accountCircleIcon } from '../constants/Icons'
import '../styles/Message.css'

type Props = {
  message?: string
  timestamp?: any
  user?: any
  userImage?: string
}

function Message({ message, timestamp, user, userImage }: Props) {
  return (
    <div className="message">
      {(userImage && <img src={userImage} alt="" />) || accountCircleIcon()}
      <div className="message__info">
        <h4>
          {user}{' '}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
