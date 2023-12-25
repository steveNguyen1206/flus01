import React from 'react'
import './profile_tab.css'
import { SmallProj, WhiteButton } from '@/components'

// import './profile.css'

const EmptyTab = () => {
    return(
        <div className='tab'>
            <SmallProj/>
            <SmallProj/>
            <SmallProj/>
            <SmallProj/>
            <SmallProj/>
        </div>
       
    );
}

const BankTab = () => {
    return(
        <div className='bank-tab'>
            {/* <div className="scroll-bar">
                <div className="rectangle-3" />
            </div> */}
            <div className='link-to-bank-text-wrap'>
               Link to Payment Account
            </div>
            <div className='paypal-mail-wrapper'>
                <input className='paypal-mail' placeholder='Input your paypal email here to add your paypal account'/>
                <button text={"Add Paypal"} className='add-paypal-btn'>Add Paypal</button>
            </div>
            <div className='available-payment-header'>
                Your available paypal email(s):
            </div>
            
        </div>
       
    );
}

export {EmptyTab, BankTab}

