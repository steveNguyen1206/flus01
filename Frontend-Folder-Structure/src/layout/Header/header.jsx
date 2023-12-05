import React from 'react'
import styles from './header.module.css'
import { Navbar } from '..'
import logo from '../../assets/logo.png'
import avatar_green from '../../assets/avatar_green.png'
import { StarRating } from '@/components'

const Header = () => {
  const signin = 0;
  return (
    <div className={styles.header}>
      <img src={logo} style={{padding:"15px", marginLeft:"2%"}}/>
      <Navbar></Navbar>
      <div style={{display: "flex",flexWrap:"wrap" ,alignContent:"center", width:"250px", height:"100%" , marginRight:"3%", padding: "0.75%"}}>
        {signin ? (
          <img src={avatar_green}  style={{objectFit:"cover",height:"100%", margin:"1%",border: "1px solid #000", borderRadius:"50.964px", boxSizing:"border-box"}}/>
        ) : (
          <div style={{display: "flex",flexWrap:"wrap" , alignContent:"center",width:"100%"}}>
            <div id='login_button-201123' className='btn btn-light'>Login</div>
            <div id='Signup_button-201123' className='btn btn-light' style={{marginLeft:"3%"}}>Signup</div>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Header
