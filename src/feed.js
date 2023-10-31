import React, { useState } from 'react';
import feed_cards from './feed_cards';
import SRlogo from './SR1.png';
import './index.css'; 

export default function Feed() {

const [searchInput, setSearchInput] = useState("");

const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" }
];

const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
      countries.filter((country) => {
      return country.name.match(searchInput);
  });
  }
  


  return (
    <div id='Feed' className='feeds'>

        <div className='menu'>

            <ul><i class="fas fa-user-tie"></i><a href='/profile'> Shubham Agarwal</a></ul>
            <ul><i class="fas fa-globe"></i><a href=''> Explore</a></ul>
            <ul><i class="fas fa-users"></i><a href=''> Discuss</a></ul>
            <ul><i class="fas fa-search"></i><a href=''> Find Start-ups</a></ul>
            <ul><i class="fas fa-search"></i><a href=''> Find a Co-Founder</a></ul>
            <ul><i class="fas fa-search"></i><a href=''> Find Investors</a></ul>
            <ul><i class="fas fa-search"></i><a href=''> Find a Mentor</a></ul>
            <ul><i class="fab fa-leanpub"></i><a href=''> Learn</a></ul>
            <ul><i class="fas fa-envelope"></i><a href=''> Messages</a></ul>
            <ul><i class="far fa-bell"></i><a href=''> Notifications</a></ul>

            <p>"Startups are like roller coasters. <br />
                There are highs and lows, but you <br />
                have to keep riding." <br /><br />
                -  Bill Nguyen</p>

        </div>

        <div className='post'>

            <div className='post-up'>
                <div className='post-area'>
                        <input className='searching'
                            type="text"
                            placeholder="Search here"
                            onChange={handleChange}
                            value={searchInput} 
                        />
                </div>
                <div className='post-options'>
                    <ul><a href=''><i class="fas fa-photo-video"></i> Media</a></ul>
                    <ul><a href=''><i class="fas fa-marker"></i> Write Article</a></ul>
                    <ul><a href=''><i class="fas fa-poll"></i> Poll</a></ul>
                    <ul className='post-button' style={{ marginTop: '0.4rem'}}><a style={{color:'white'}} href=''>Post</a></ul>
                </div>
            </div>

            <div className='posting'>

                <div className='post1'>
                    <div className='posting-person'>
                        {/* <img src='' alt='Image Icon' /> */}
                        <p><i class="fas fa-user-tie"></i> Shubham Agarwal</p>
                    </div>
                    <div className='posting-details'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='posting-action'>
                        <ul><i class="fas fa-thumbs-up"></i> Like</ul>
                        <ul><i class="far fa-comment-dots"></i> Comment</ul>
                        <ul><i class="fas fa-share-alt"></i> Share</ul>
                    </div>
                </div>    
                
                <div className='post1'>
                    <div className='posting-person'>
                        {/* <img src='' alt='Image Icon' /> */}
                        <p><i class="fas fa-user-tie"></i> Kunal Vijay</p>
                    </div>
                    <div className='posting-details'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='posting-action'>
                        <ul><i class="fas fa-thumbs-up"></i> Like</ul>
                        <ul><i class="far fa-comment-dots"></i> Comment</ul>
                        <ul><i class="fas fa-share-alt"></i> Share</ul>
                    </div>
                </div>

                <div className='post1'>
                    <div className='posting-person'>
                        {/* <img src='' alt='Image Icon' /> */}
                        <p><i class="fas fa-user-tie"></i> Pranshu Sharma</p>
                    </div>
                    <div className='posting-details'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='posting-action'>
                        <ul><i class="fas fa-thumbs-up"></i> Like</ul>
                        <ul><i class="far fa-comment-dots"></i> Comment</ul>
                        <ul><i class="fas fa-share-alt"></i> Share</ul>
                    </div>
                </div>    
                
            </div>

        </div>

        <div className='ads'>

            <div className='ads-media'>
                <img src={SRlogo} alt='Start Right Logo' style={{ width: 15 + 'em' }} />
            </div>
            <div className='events'>
                <h3>Upcoming Events</h3>
                <p>No events found</p>
            </div>

        </div>

    </div>
  )
}
