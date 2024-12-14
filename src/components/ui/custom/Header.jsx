import React from 'react'
import { Button } from '../button'

function Header() {
  return (
    <div className='p-2 mx-4 shadow-sm flex justify-between items-center'>
        <img src='/dark.webp' className='h-8 '></img>
        <Button>Sign In</Button>
    </div>
  )
}

export default Header