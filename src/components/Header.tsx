import React from 'react'
import '../styles/Header.css'
import { Avatar } from '@material-ui/core'
import { searchIcon, helpOutlineIcon } from '../constants/Icons'
import { useStateValue } from '../general/provider/StateProvider'

function Header() {
  const [state]: any = useStateValue()

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={state?.user?.displayName}
          src={state?.user?.photoURL}
        />
        <span className="header__user__email">{state?.user?.email}</span>
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
