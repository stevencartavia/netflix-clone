import React from 'react';
import './PlansScreen.css';

function PlansScreen() {
    let today = new Date().toLocaleDateString()

  return (
    <div className='plansScreen'>
        <p>Renewal date: {today}</p>
        <div className='plansScreen__plans'>
            <div>
                <p>Netflix Standard</p>
                <p>1080p</p>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='plansScreen__plans'>
            <div>
                <p>Netflix Standard</p>
                <p>480p</p>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='plansScreen__plans'>
            <div>
                <p>Netflix Standard</p>
                <p>4K+HDR</p>
            </div>
            <button className='currentPlan'>Current Package</button>
        </div>
    </div>
  )
}

export default PlansScreen