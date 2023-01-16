import React from 'react'

const CliseFreind = ({user}) => {
  return (
    <li className="sideBarFriend">
      <img className='sidebarFriendImg' src={user.profilePicture} alt="" />
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
  )
}

export default CliseFreind
