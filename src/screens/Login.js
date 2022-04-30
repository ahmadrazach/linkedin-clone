import React,{useState} from 'react'
import './Login.css'
import Textlogo from '../files/images/textlogo.png'
import {auth} from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch=useDispatch();


    const loginToApp=(e)=>{
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            dispatch(
                login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoURL:userAuth.user.photoURL,
                })
            )
        })
        .catch((error)=>alert(error.message));
    };
    const register=()=>{
        if(!name){
            return alert("Input Error : Enter full name");
        }

        auth
        .createUserWithEmailAndPassword(email,password)
        .then(
            (userAuth)=>{
                userAuth.user.updateProfile({
                    displayName:name,
                    photoURL:profilePic,
                })
            .then(()=>{
                dispatch(
                    login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        photoURL:profilePic,
                    })
                )
            })
            }
        )
        .catch((error)=>alert(error.message));
    };
  return (
    <div className='login'>
        <img src={Textlogo} alt="LinkedIn text Logo"/>

        <form>
            <input 
            value={name}
            onChange={e=>setName(e.target.value)}
            placeholder='Full name (required)'
            type="text"/>

            <input 
            value={profilePic}
            onChange={e=>setProfilePic(e.target.value)}
            placeholder='Profile pic URL (optional)'
            type="text"/>

            <input 
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
            placeholder='Email'
            type="email"/>

            <input 
            value={password}
            onChange={e=>setPassword(e.target.value)}
            placeholder='Password'
            type="password"/>
            
            <button className='login__register' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member ? 
            <span className='login__register' onClick={register}>Register</span>
        </p>
        
    </div>
  )
}

export default Login