import React, { useState } from 'react'
import logo from './logo.svg'
import Main from './app/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main />
    </div>
  )
}

export default App
