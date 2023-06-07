import Navbar from "../../../components/Navbar/Navbar"
import Sidebar from "../../../components/Sidebar/Sidebar"
import Feed from "../../../components/Feed/Feed"
import Rightbar from "../../../components/Rightbar/Rightbar"
import './profile.css'
import axios from 'axios'
import {useParams} from "react-router"
import {useEffect, useState} from 'react'

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({})
  const username = useParams().username


  useEffect(()=>{
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
        setUser(res.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser()
  }, [])

  return (
    <>
        <Navbar />
        <div className="profile">
          <Sidebar />
          <div className="profile-right">
            <div className="profile-right-top">
                <div className="profile-cover">
                    <img className='profile-cover-image' src={user.coverPicture || PF+"person/generic.jpeg"} alt="" />
                    <img className='profile-user-image' src={user.profilePicture || PF+"person/general.jpeg"} alt="" />
                </div>
                <div className="profile-info">
                    <h4 className='profile-info-name'>{user.username}</h4>
                    <span className='profile-info-desc'>{user.desc}</span>
                </div>
            </div>
            <div className="profile-right-bottom">
             <Feed username="noka"/>
             <Rightbar user={user}/>
            </div> 
          </div>
        </div>
    </>
  )
}
  