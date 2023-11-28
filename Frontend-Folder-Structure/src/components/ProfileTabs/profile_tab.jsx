import React from 'react'
import './profile_tab.css'
import { SmallProj } from '@/components'

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
        <div className='tab'>
            <div className="scroll-bar">
                <div className="rectangle-3" />
            </div>
            <SmallProj/>
        </div>
       
    );
}

export {EmptyTab}

