import { useState } from 'react'
import logo from './assets/Logo.png'
import monogram from './assets/Monogram.png'
import './App.css'
import FeatherIcon from 'feather-icons-react'

function App() {

  return (
    <>
      <div className='container'>
        <img className="logo-image" src={logo} />
        <span className='coming-soon'>Coming Soon</span>
      </div>
    </>
  )
}

export default App
