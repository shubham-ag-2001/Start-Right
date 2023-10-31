import React from 'react'

export default function Footer() {
  return (
    <div id='Foot' className='cfooter'> 

      <div className='footertop'>
        <div className='footertopmain'>
          <h4>Product</h4>
          <ul><a className='footera' href='#'>Blog</a></ul>
          <ul><a className='footera' href='#'>Partners</a></ul>
          <ul><a className='footera' href='#'>Premium</a></ul>
        </div>  

        <div className='footertopmain'>
          <h4>Resources</h4>
          <ul><a className='footera' href=''>Support</a></ul>
          <ul><a className='footera' href=''>Events</a></ul>
          <ul><a className='footera' href=''>Privacy Policy</a></ul>
        </div>

        <div className='footertopmain'>
          <h4>Company</h4>
          <ul><a className='footera' href=''>About</a></ul>
          <ul><a className='footera' href=''>Contact us</a></ul>
        </div>

        <div className='footertopmain'>
          <h4 className='footerheading'>Connect with us</h4>
          <div className='fmedia'>
            <a href=''><i className="fab fa-facebook-f"></i></a>
            <a href=''><i className="fab fa-twitter"></i></a>
            <a href=''><i className="fab fa-instagram"></i></a>
            <a href=''><i className="fas fa-envelope"></i></a>
          </div>
        </div>  
      </div>

      <div className='footerend'>
        <ul><a className='footera' href=''><i class="far fa-copyright"></i> Copyright 2023 Start Right</a></ul>
        <ul><a className='footera' href=''>Terms & Conditions</a></ul>
      </div>

    </div>
  )
}
