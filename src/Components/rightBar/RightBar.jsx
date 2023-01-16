import React from 'react'
import './rightBar.css'
import { Users  } from '../../dummyData'
import Online from '../online/Online'
import { Home } from '@material-ui/icons'

const RightBar = ({profile, homePage}) => {
  
  const HomeRightBar = () => {
    return <>
     <div className="birthdayContainer">
        <img className='birthdayImg' src="assets/gift.png" alt="" />
        <span className="birthdayText">
          <b>Mouna</b> and 3 other friends have a birthday today
        </span>
      </div>
      <img src="assets/ad.png" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFreindList">
        {Users.map((user) => ( 
          <Online key={user.id} user={user} />
        )
        )}
      </ul>
    </>
  };

  const ProfileRightBar = () => {
    return <h1>hey it's profile</h1>
  }

  return (
    <div className='rightBar'>
      <div className="righBarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}

export default RightBar