import { AuthContext } from '../../context/AuthContext'
import { useContext, useRef, useState } from 'react'
import './share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'
import axios from 'axios'

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const {user} = useContext(AuthContext)
  const placeholder = `What's on your mind, ${user.username.charAt(0).toUpperCase() + user.username.slice(1)}?`
  const desc = useRef()
  const [file, setFile] = useState(null)


  const submitHandler = async (e) =>{
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    if(file){
      const data = new FormData()
      const fileName = Date.now() + file.name
      data.append("file",file)
      data.append("name",fileName)
      newPost.img = fileName
      try {
        await axios.post('http://localhost:8800/api/upload', data)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      await axios.post("http://localhost:8800/api/posts",newPost)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  

  return (
    <div className='share'>
        <div className="share-wrapper">
            <div className="share-top">
                <img className='share-img' 
                src={
                  user.profilePicture 
                  ? PF + user.profilePicture
                  : PF + "Person/general.jpeg"
                } 
                alt="" />
                <input type="text" 
                  placeholder={placeholder}
                  className="share-input" 
                  ref={desc} 
                />
            </div>
            <hr className="share-hr" />
            <form className="share-bot" onSubmit={submitHandler}>
                <div className="share-options">
                    <label htmlFor="file" className="share-option">
                      <PermMedia htmlColor='tomato' className='share-icon'/>
                      <span className="share-span">Photo or video</span>
                      <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                    </label>
                    <div className="share-option">
                      <Label htmlColor='blue' className='share-icon'/>
                      <span className="share-span">Tag</span>
                    </div>
                    <div className="share-option">
                      <Room htmlColor='green' className='share-icon'/>
                      <span className="share-span">Location</span>
                    </div>
                    <div className="share-option">
                      <EmojiEmotions htmlColor='goldenrod' className='share-icon'/>
                      <span className="share-span">Emotion</span>
                    </div>
                </div>
                <button className="share-button" type="submit">Share</button>
            </form>
        </div>
    </div>
  )
}

