import React, { useEffect, useState } from 'react';
import SRlogo from './SR3.png';
import './index.css';

export default function Nav() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrolling ? '#ecf3f0' : 'transparent',
    transition: 'background-color 0.5s ease',
  };

  return (
    <div className='navb' style={navbarStyle}>
      <div className='heading'>
        {/* <img src={SRlogo} alt='Image' style={{ height: 15 + 'vh' }} /> */}
        <h1>START RIGHT</h1>
      </div>
      <div className='navbar'>
        <ul>
          <a className='navbara' href='/Feed'>
            Feed
          </a>
        </ul>
        <ul>
          <a className='navbara' href='#Foot'>
            Resources
          </a>
        </ul>
        <ul>
          <a className='navbara' href='#register'>
            Register
          </a>
        </ul>
        <ul>
          <a className='navbarLog' href='#login'>
            Log In
          </a>
        </ul>
      </div>
    </div>
  );
}
