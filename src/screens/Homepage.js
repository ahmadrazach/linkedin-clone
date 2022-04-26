import './Homepage.css'
import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Homepage = () => {
  return (
    <div className='homepage'>
        <Header/>

        {/* App body */}
        <div className='homepage__body'>
          <Sidebar/>
          <h2>Anther one</h2>
          <h2>Anther one</h2>
        </div>
    </div>
  )
}

export default Homepage