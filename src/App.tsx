import React from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <h1>NGH-CORP</h1>
      <Header />
      <div className="app_body"></div>
      <Sidebar />
      {/* {React Router} */}
    </div>
  )
}

export default App
