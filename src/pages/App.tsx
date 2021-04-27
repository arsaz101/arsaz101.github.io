import React from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Login from './Login'
import { useStateValue } from '../general/provider/StateProvider'

function App() {
  const [state]: any = useStateValue()
  return (
    <div className="App">
      <Router>
        {!state.user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/" exact>
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
