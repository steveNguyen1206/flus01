import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
    <div className="container text-center" style={{display:"flex", alignContent:"center", width:"100%", flexWrap:"wrap", }}>
      <div className="row" style={{margin:"0",width:"100%", paddingLeft:"10%", paddingRight:"8%"}}>
        <div className="col" style={{display:"flex", justifyContent: "center"}}>
          <div className="nav_text">Home</div>
        </div>
        <div className="col" style={{display:"flex", justifyContent: "center"}}>
          <div className="nav_text">Find Jobs</div>
        </div>
        <div className="col" style={{display:"flex", justifyContent: "center"}}>
          <div className="nav_text">Find Freelancers</div>
        </div>
        <div className="col" style={{display:"flex", justifyContent: "center"}}>
          <div className="nav_text">Community</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
