import React from 'react'
import Nav from './nav'
import Home from './home'
import RegistrationForm from './register'
import LoginForm from './login'
import Footer from './footer'

function HomePage() {
  return (
    <>
    <Nav/>
      <Home/>
      <RegistrationForm/>
      <LoginForm />
      <Footer/>
    </>
  )
}

export default HomePage