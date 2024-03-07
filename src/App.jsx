import { useState } from 'react'
import './App.css'
import { Intro } from './components'
import { Quotes } from './components'

function App() {
  
  return (
    <div className="main-container">
      <div className="placeholder-div">
      </div>
      <Intro stanley="123" id="hey" />
      <div>
        <div className="placeholder-div"></div>
        <Quotes />
        <div className="placeholder-div"></div>
      </div>
    </div>
  )
}

export default App
