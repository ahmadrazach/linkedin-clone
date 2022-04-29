import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../files/images/logo.svg'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import  SupervisorAccountIcon  from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon  from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from "@material-ui/icons/Notifications"
import {auth} from '../firebase/firebase'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const Header = () => {

  const dispatch=useDispatch();

  const logoutofApp=()=>{
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo} alt=""/>
            <div className='header__search'>
                <SearchIcon/>
                <input placeholder="Search" type="text" />
            </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption 
            avatar="true" 
            onClick={logoutofApp} 
            title="Ahmed"/>
        </div>

    </div>
  )
}

export default Header