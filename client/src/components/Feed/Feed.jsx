import './feed.css'
import Share from '../Share/Share'
import Post from '../Post/post'
import {useContext, useEffect, useState} from "react"
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'

export default function Feed({username}) {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const res = username 
        ? await axios.get("http://localhost:8800/api/posts/profile/" + username) 
        : await axios.get("http://localhost:8800/api/posts/timeline/" + user._id)
        setPosts(res.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts()
  }, [username, user._id])

  return (
    <div className='feed'>
      <div className="feed-container">
        <Share />
        {posts.map((p)=> (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}
