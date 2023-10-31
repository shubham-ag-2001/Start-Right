import React from 'react'
import Tirangaa from './Tirangaa.png'
import IIITULogo from './IIITU Logo.webp'

export default function Profile() {
  return (
    <div className='profile'>


        <div className='profile1'>
            <img className='bgimage' src={Tirangaa} alt='Tirangaa' /> 
           
            <div className='dp_name'>
                <img className='dp' src={IIITULogo} alt='IIITU'/>
                <div className='dp_title'>
                    <h1>Indian Institute of Information Technology Una</h1>
                    <h3>Institute of National Importance</h3>
                    <h5>Una, Himachal Pradesh, India</h5>
                    <a href=''>10000 Connections</a>
                </div>
            </div>
        </div>


        <div className='profile_2'>
            <div className='edit'>
                <h3>Edit Profile</h3>
                <h3>Show Interests</h3>
            </div>
            <div className='similar'>
                <h3>People Also Viewed</h3>
                <h4>Indian Institute of Information Technology Prayagraj</h4>
                <h4>Indian Institute of Information Technology Jabalpur</h4>

            </div>
        </div>

    </div>
  )
}
