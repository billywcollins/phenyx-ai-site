import { useState } from 'react'
import logo from './assets/Logo.png'
import monogram from './assets/Monogram.png'
import './App.css'
import FeatherIcon from 'feather-icons-react'
import { motion } from "framer-motion"
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='container'>
        <div className="logo-conainer">
          <motion.div
            className='circle-container'
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 1080 }}
            transition={{
              duration: 1.5,
              type: "spring"
            }}
          >
            <img src={monogram} className='circles'/>
          </motion.div>

          <motion.div
            className='phenyx'
            initial={{ opacity: 0, x:500 }}
            animate={{ opacity: 1, x:"-10%" }}
            transition={{
              duration:1.5,
              type:"spring"
            }}
          >
            <h1>Phenyx</h1>
          </motion.div>

          <motion.div
            className='studios'
            initial={{ opacity: 0, x:-500 }}
            animate={{ opacity: 1, x:"10%" }}
            transition={{
              duration:1.5,
              type:"spring"
            }}
          >
            <h1>Studios</h1>
          </motion.div>
        </div>
        
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.0,
            delay: 1.0,
            ease: "linear"
          }}
        >
          <Footer />
        </motion.div>
        
      </div>
    </>
  )
}

export default App
