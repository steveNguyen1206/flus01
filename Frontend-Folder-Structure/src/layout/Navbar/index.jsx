import React from 'react'
import styles from './navbar.module.css'


const Navbar = () => {
  return (
    <div className="container text-center" style={{display:"flex", alignContent:"center", width:"100%", flexWrap:"wrap", }}>
      <div className="row" style={{width:"100%", paddingLeft:"10%", paddingRight:"8%"}}>
        <div className="col" style={{display:"flex", justifyContent: "center"}}>
          <div className={styles.nav_text}>Home</div>
        </div>
        <div className="col" style={{display:"flex", justifyContent: "center"}}>
          <div className={styles.nav_text}>Find Jobs</div>
        </div>
        <div className="col" style={{display:"flex", justifyContent: "center"}}>
          <div className={styles.nav_text}>Find Freelancers</div>
        </div>
        <div className="col" style={{display:"flex", justifyContent: "center"}}>
          <div className={styles.nav_text}>Community</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
