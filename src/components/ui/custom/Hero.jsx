import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1
        className='font-bold text-[50px] text-center'
      >
        <span className='text-[#007764]'>Discover Your Next adventure with AI:  </span>Personalised Iteneraries at Your Fingertips
      </h1>
      <p className='text-xl text-center'>
        Your Personal trip curator, budget planner, create custom iteneraries tailored according to your needs!
      </p>
      <Link to={'/create-trip'}>
      <Button>Get Started</Button>
      </Link>
    </div>
  )
}

export default Hero