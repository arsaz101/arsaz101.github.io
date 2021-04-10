import React from 'react'
import '../styles/SidebarOption.css'

interface Props {
  Icon?: any
  title?: string
}

function SidebarOption({ Icon, title }: Props) {
  return (
    <div className="sidebarOption">
      {Icon && Icon('sidebarOption__icon')}
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
