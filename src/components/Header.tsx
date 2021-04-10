import React from 'react'
import '../styles/Header.css'
import { Avatar } from '@material-ui/core'
import { accessTimeIcon, searchIcon, helpOutlineIcon } from '../constants/Icons'

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="Arsal Azam" src="" />
        {accessTimeIcon()}
      </div>
      <div className="header__search">
        {searchIcon()}
        <input placeholder="Search" />
      </div>
      <div className="header__right">{helpOutlineIcon()}</div>
    </div>
  )
}

export default Header
