import React from 'react'
import './topBar.css'
import {Search, Person, Chat, Notifications} from '@material-ui/icons'
import {Link} from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='topBarContainer'>
      <div className='topBarLeft'>
        <span className='logo'>mounaSocial</span>
      </div>
      <div className='topBarCenter'>
        <div className="searchBar">
          <Search className='searchIcon'/>
          <input type="text" placeholder='search...' className="searchInput" />
        </div> 
      </div>
      <div className='topBarRight'>
        <div className="topBarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
        </div>
          <img src="/assets/person/1.jpeg" alt="" className='topbarImg' />        
      </div>
    </div>
  )
}

export default TopBar  