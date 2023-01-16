import React from 'react'
import SideBar from '../../Components/sideBar/SideBar'
import TopBar from '../../Components/topBar/TopBar'
import RightBar from '../../Components/rightBar/RightBar'
import Feed from '../../Components/feed/Feed'
import './home.css'

const Home = () => {
  return (
    <>
    <TopBar />
    <div className='Container'>
      <SideBar />
      <Feed />
      <RightBar />
    </div>
    </>
  )
}

export default Home
