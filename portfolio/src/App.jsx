import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'
import Navbar from '../components/navbar/Navbar'
import './App.css'
import Home from '../pages/home/Home';
import User from '../pages/user/User';

export const App = () => {

  const {Theme} = useContext(ThemeContext)
  return (
    <div className={`main-container ${Theme}`}>
      <Routes >
        <Route path="/" element={ <Home /> }/>
        <Route path="/user" element={ <User /> }/>
      </Routes>
  </div>
  )
}
