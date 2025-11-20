import React from 'react'
import HomePage from './HomePage'
import Navbar from '../Components/Navbar'
import TopBar from '../Components/TopBar'
import Fotter from '../Components/Fotter'

const LandingPage = ({screen}) => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    {screen ? <div>{screen}</div> : <HomePage/>}
    <Fotter/>
    </>
  )
}

export default LandingPage
