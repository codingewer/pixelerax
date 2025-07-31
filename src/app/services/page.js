import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Packages from '@/components/Pages/Packages'
import Services from '@/components/Pages/Services'
import React from 'react'

function page() {
  return (
    <div className='pagewrapped' >
        <Navbar/>
        <Services/>
        <Footer/>

    </div>
  )
}

export default page
