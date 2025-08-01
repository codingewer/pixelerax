import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Contact from  '@/components/Pages/Contact'

function page() {
  return (
    <div className='pagewrapped'>
    <Navbar/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default page