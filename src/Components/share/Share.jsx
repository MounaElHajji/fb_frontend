import React from 'react'
import './share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'
const Share = () => {
  return (
    <div className='share'>
      <div className="sharedWrapper">
        <div className="shareTop">
            <img src="/assets/person/1.jpeg" alt="" className='sharedProfileImg' />
            <input type="text" placeholder="what's in your mind" className="sharedInput" />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="sharedOptions">
                <div className="shareOptionItem">
                    <PermMedia htmlColor='tomato' className='shareIcon'/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                 <div className="shareOptionItem">
                    <Label htmlColor='blue' className='shareIcon'/>
                    <span className="shareOptionText">Tag</span>
                </div>
                 <div className="shareOptionItem">
                    <Room htmlColor='green' className='shareIcon'/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOptionItem">
                    <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                    <span className="shareOptionText">Feeling</span>
                </div>
            </div>
            <button className='shareBottomlittle'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
