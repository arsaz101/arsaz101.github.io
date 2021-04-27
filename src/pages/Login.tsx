import { Button } from '@material-ui/core'
import React from 'react'
import { whatsAppIcon, inboxIcon, libraryAddIcon } from '../constants/Icons'
import { auth, googleProvider, facebookProvider } from '../database/firebase'
import { useStateValue } from '../general/provider/StateProvider'
import { actionTypes } from '../general/reducer/reducer'
import '../styles/Login.css'

function Login() {
  const [, dispatch]: any = useStateValue()

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  const signInWithFacebook = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
  }

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
          <Button onClick={signInWithGoogle}>Sign in with Google</Button>
          <Button onClick={signInWithFacebook}>Sign in with Facebook</Button>
          <span className="container__right__bottom">
            No account yet? <a href="./">Sign Up for free</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
