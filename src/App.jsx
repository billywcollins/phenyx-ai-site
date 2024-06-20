import { useState } from 'react'
import logo from './assets/Logo.png'
import monogram from './assets/Monogram.png'
import './App.css'
import FeatherIcon from 'feather-icons-react'
import { motion } from "framer-motion"

function App() {

  return (
    <>
      <div className='container'>
        <motion.div 
          className='logo-div'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [.25,.1,.25,1]
          }}>
            <img className="logo-image" src={logo} />
          </motion.div>
        <motion.div
          className='coming-soon-div'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.0,
            delay: 1.0,
            ease: "linear"
          }}>
          <span className='coming-soon'>Coming Soon</span>
        </motion.div>
      </div>
    </>
  )
}

export default App
