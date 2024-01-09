import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import { Navbar } from '..'
import logo from '../../assets/logo.png'
import avatar_green from '../../assets/avatar_green.png'
import { StarRating } from '@/components'
import { useNavigate } from 'react-router';
import { AuthProvider, useAuth } from '../../AuthContext';


const Header = () => {
  const { signin, setSignin } = useAuth();
  console.log("signin", signin);
  const handleSignOut = () => {
    localStorage.removeItem('AUTH_TOKEN');
    localStorage.removeItem('LOGINID');
    localStorage.removeItem('AVT');
    setSignin(false);
  }
  // console.log("AVATER", localStorage.getItem('AVT'));
  const avatarSrc = (localStorage.getItem('AVT') != 'undified' && localStorage.getItem('AVT') != 'https://imgur.com/gallery/ApNKGxs') ? localStorage.getItem('AVT') : avatar_green;

  const navigate = useNavigate();


  return (
    <div className={styles.header}>
      <img src={logo} style={{padding:"15px", marginLeft:"2%"}}/>
      <Navbar></Navbar>
      <div className='button-avatar' style={{display: "flex",flexWrap:"wrap" ,alignContent:"center", width:"250px", height:"100%" , marginRight:"3%", padding: "0.75%"}}>
        {signin && (
          <div className="sign-in-done" style={{height:"100%", width:"100%"}}>
            <img onClick={handleSignOut} src={avatarSrc}  style={{position:"inline", objectFit:"cover",height:"100%", margin:"1%",border: "1px solid #000", borderRadius:"50.964px", boxSizing:"border-box"}}/>
            <div id='login_button-201123' className='btn btn-light'  onClick={() => navigate('/admin')} style={{marginLeft:"8%"}}>Admin</div>
          </div>
         
        )}
        {!signin && (
          <div className="not-sign-in"  style={{display: "flex",flexWrap:"wrap" , alignContent:"center",width:"100%"}}>
            <div id='login_button-201123' className='btn btn-light' onClick={() => navigate('/login')}>Login</div>
            <div id='Signup_button-201123' className='btn btn-light'  onClick={() => navigate('/signup')} style={{marginLeft:"3%"}}>Signup</div>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Header
