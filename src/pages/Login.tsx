import { Button } from '@material-ui/core'
import React from 'react'
import { whatsAppIcon, inboxIcon, libraryAddIcon } from '../constants/Icons'
import '../styles/Login.css'

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="container__left">
          <div className="info__item">
            {whatsAppIcon()}
            <div className="detail__item">
              <h2>Verified Whatsapp</h2>
              <p>We help your business get on WhatsApp.</p>
            </div>
          </div>
          <div className="info__item">
            {inboxIcon()}
            <div className="detail__item">
              <h2>Inbox for everyone</h2>
              <p>
                24/7 support for you and your team, with local presence in 7
                countries.
              </p>
            </div>
          </div>
          <div className="info__item">
            {libraryAddIcon()}
            <div className="detail__item">
              <h2>Channels supported</h2>
              <span>
                {whatsAppIcon()} {inboxIcon()}
              </span>
              <p>and more.</p>
            </div>
          </div>
        </div>
        <div className="container__right">
          <h1>Welcome</h1>
          <Button>Sign in with Email</Button>
          <span className="divider">OR</span>
          <Button>Sign in with Google</Button>
          <Button>Sign in with Facebook</Button>
          <span className="container__right__bottom">
            No account yet? <a href="./">Sign Up for free</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
