import React, { useState, useEffect } from 'react'
import '../styles/Sidebar.css'
import {
  fiberManualRecordIcon,
  createIcon,
  insertCommentIcon,
  inboxIcon,
  draftsIcon,
  bookmarkBorderIcon,
  peopleAltIcon,
  appsIcon,
  fileCopyIcon,
  expandLessIcon,
  expandMoreIcon,
  addIcon,
} from '../constants/Icons'
import SidebarOption from './SidebarOption'
import db from '../database/firebase'

function Sidebar() {
  const [channels, setChannels] = useState([])

  useEffect(() => {
    // Run this code when the sidebar component loads
    db.collection('rooms').onSnapshot((snapshot: any) =>
      setChannels(
        snapshot.docs.map((doc: any) => ({
          id: doc.id,
          name: doc.data().name,
        })),
      ),
    )
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Ngh-Corp</h2>
          <h3>
            {fiberManualRecordIcon()}
            Arsal Azam
          </h3>
        </div>
        {createIcon()}
      </div>
      <SidebarOption Icon={insertCommentIcon} title="Threads" />
      <SidebarOption Icon={inboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={draftsIcon} title="Saved items" />
      <SidebarOption Icon={bookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={peopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={appsIcon} title="Apps" />
      <SidebarOption Icon={fileCopyIcon} title="File browser" />
      <SidebarOption Icon={expandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={expandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={addIcon} title="Add Channel" addChannelOption />

      {/* {Connect to dB and list all the channels} */}
      {/* {<SidebarOption ... />} */}
      {channels?.map((channel: any) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  )
}

export default Sidebar
