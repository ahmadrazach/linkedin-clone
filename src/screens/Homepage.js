import './Homepage.css'
import React, { useEffect } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import {useDispatch, useSelector }from 'react-redux';
import { login,logout,selectUser } from '../features/userSlice';
import Login from './Login';
import { auth } from '../firebase/firebase';
import Widgets from '../components/Widgets';

const Homepage = () => {

  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //user's logged in
        dispatch(
          login({
              email:userAuth.email,
              uid:userAuth.uid,
              displayName:userAuth.displayName,
              photoURL:userAuth.photoURL,
          })
      )
      }
      else{
        //user's not logged in
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className='homepage'>
        <Header/>


        {!user?(
          <Login/>
          ):(
            <div className='homepage__body'>
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>
          )
        }
        {/* App body */}
        
    </div>
  )
}

export default Homepage