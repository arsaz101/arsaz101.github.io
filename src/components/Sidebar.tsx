import React, { useState, useEffect } from 'react'
import '../styles/Sidebar.css'
import {
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
// import { useStateValue } from '../general/provider/StateProvider'

function Sidebar() {
  const [channels, setChannels] = useState([])
  // const [state]: any = useStateValue()

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
      <SidebarOption
        Icon={insertCommentIcon}
        id="insertCommentIcon"
        toolTip="Insert comment"
      />
      <SidebarOption Icon={inboxIcon} id="inbox" toolTip="Inbox" />
      <SidebarOption Icon={draftsIcon} id="drafts" toolTip="Drafts" />
      <hr />
      <SidebarOption
        Icon={bookmarkBorderIcon}
        id="bookmarks"
        toolTip="Bookmarks"
      />
      <SidebarOption Icon={peopleAltIcon} id="people" toolTip="People" />
      <SidebarOption Icon={appsIcon} id="insertCommentIcon" toolTip="Apps" />
      <SidebarOption Icon={fileCopyIcon} id="filecopy" toolTip="File Copy" />
      <SidebarOption
        Icon={expandLessIcon}
        id="expandless"
        toolTip="Expand Less"
      />
      <hr />
      <SidebarOption
        Icon={expandMoreIcon}
        id="expandmore"
        toolTip="Expand More"
      />
      <hr />
      <SidebarOption
        Icon={addIcon}
        id="addchannel"
        toolTip="Add Channel"
        addChannelOption
      />

      {/* {Connect to dB and list all the channels} */}
      {/* {<SidebarOption ... />} */}
      {channels?.map((channel: any) => (
        <SidebarOption id={channel.id} />
      ))}
    </div>
  )
}

export default Sidebar
