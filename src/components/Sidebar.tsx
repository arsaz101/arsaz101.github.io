import React from 'react'
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

function Sidebar() {
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
      <SidebarOption Icon={addIcon} title="Add Channel" />

      {/* {Connect to dB and list all the channels} */}
      {/* {<SidebarOption ... />} */}
    </div>
  )
}

export default Sidebar
