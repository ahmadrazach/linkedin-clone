import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'

const Sidebar = () => {

    const recentItem=(topic)=>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>

    )
    
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
            <Avatar className='sidebar__avatar'/>
            <h2>Ahmed Raza</h2>
            <h4>ahmadrazach26@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,543</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,449</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('devNation')}
            {recentItem('linkedinclone')}
            {recentItem('project')}
            {recentItem('reactdevelopment')}
        </div>
    </div>
  )
}

export default Sidebar