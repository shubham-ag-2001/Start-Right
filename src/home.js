import React from 'react'
import './index.css'; 
import HomeImage from './sr6.webp'

export default function Home() {
  return (
    <div className='home'>

      <div className='home-content'>
        <ul><i class="far fa-hand-point-right"></i><h4>Co-Founder Matching : </h4>Our Co-Founder Matching feature is powered by advanced algorithms and machine learning.</ul>
        <ul><i class="far fa-hand-point-right"></i><h4>Startup Validation : </h4>Our Validation feature is designed to instill trust and confidence.</ul>
        <ul><i class="far fa-hand-point-right"></i><h4>Funding Information : </h4>We provide comprehensive Funding Information, giving users real-time access to a startup's financial health and funding history.</ul>
        <ul><i class="far fa-hand-point-right"></i><h4>Domain Research : </h4>Our Domain Research feature equips users with in-depth knowledge about various industries and domains.</ul>
      </div>

      <div className='home-media'>
        <img className='home-content-image' src={HomeImage} alt='Image' />
      </div>

    </div>
  )
}
