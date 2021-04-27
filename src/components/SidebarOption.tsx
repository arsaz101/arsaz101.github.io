import React from 'react'
import { useHistory } from 'react-router-dom'
import db from '../database/firebase'
import '../styles/SidebarOption.css'

type Props = {
  Icon?: any
  title?: string
  toolTip?: string
  id?: string
  addChannelOption?: boolean
}

function SidebarOption({ Icon, title, toolTip, id, addChannelOption }: Props) {
  const history = useHistory()

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`)
    } else {
      alert('Invalid ID')
    }
  }

  const addChannel = () => {
    // eslint-disable-next-line no-alert
    const channelName = prompt('Please enter the channel name')

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      })
    }
  }

  return (
    <div
      className="sidebarOption"
      id={id}
      aria-hidden="true"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && Icon('sidebarOption__icon')}
      {(toolTip || title) && (
        <span className="tooltiptext">{toolTip || title}</span>
      )}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  )
}

export default SidebarOption
