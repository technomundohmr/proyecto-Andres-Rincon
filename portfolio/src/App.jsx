import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Navbar from '../components/navbar/Navbar'
import './App.css'
export const App = () => {
  
  const {Theme} = useContext(ThemeContext)
  return (
    <div className={`main-container ${Theme}`}>
    <Navbar />
  </div>
  )
}
