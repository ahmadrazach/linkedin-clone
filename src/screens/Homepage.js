import './Homepage.css'
import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

const Homepage = () => {
  return (
    <div className='homepage'>
        <Header/>

        {/* App body */}
        <div className='homepage__body'>
          <Sidebar/>
          <Feed/>
          <h2>3rd</h2>
        </div>
    </div>
  )
}

export default Homepage