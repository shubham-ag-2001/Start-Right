import React from 'react'

export default function Testimonial_cards(props) {
  return (
    <div>
        <div className="Testimonial_cards-container">
        </div>
        <div className="Testimonial_cards-content">
            <h4>{props.testimonials_name}</h4>
            <p>{props.testimonials_body}</p>
        </div>
    </div>
  )
}
