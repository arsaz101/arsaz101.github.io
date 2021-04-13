import React, { useState } from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

function App() {
  const [user] = useState(null)

  return (
    <div className="App">
      <Router>
        {!user ? (
          <h1>LOGIN PAGE</h1>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  {/* <h1>Chat Screen</h1> */}
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* {React Router} */}
            </div>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
