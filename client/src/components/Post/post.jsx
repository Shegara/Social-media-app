import './post.css'
import {MoreVert} from '@material-ui/icons'
import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react'
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';


export default function Post ({post}) {
    const [like, setLike] = React.useState(post.likes.length)
    const [isLiked, setIsLiked] = React.useState(false)
    const [user, setUser] = React.useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} = React.useContext(AuthContext)
    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])
    useEffect(()=>{
        const fetchUser = async () => {
          try {
            const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`);
            setUser(res.data)
          } catch (error) {
            console.error(error);
          }
        }
        fetchUser()
      }, [])


    const likeHandler =()=> {
        try {
            axios.put("http://localhost:8800/api/posts/" + post._id + "/like" , {userId:currentUser._id})
        } catch (err) {

        }
        setLike(prevLike => (isLiked ? prevLike -1 : prevLike +1))
        setIsLiked(prevIsLiked => !prevIsLiked)
    }
    useEffect (()=>{
        console.log(post)
    }, [])
    return (
        <div>
            <div className='post'>
                <div className="post-wrapper">
                    <div className="post-top">
                        <div className="post-top-left">
                            <Link to={`profile/${user.username}`}>
                                <img 
                                src=
                                {   
                                    user.profilePicture 
                                    ? user.profilePicture 
                                    : PF + "Person/general.jpeg" 
                                }
                                className='post-profile-img' 
                                alt="" 
                                />
                            </Link>
                            <span className="post-profile-user">
                                {user.username}    
                            </span>
                            <span className="post-profile-time">{format(post.createdAt)}</span>
                        </div>
                        <div className="post-top-right">
                            <MoreVert/>
                        </div>
                    </div>
                    <div className="post-center">
                        <span className="post-text">{post?.desc}</span>
                        <img className='post-image' src={PF+post.img}></img>
                    </div>
                    <div className="post-bottom"> 
                        <div className="post-bottom-left">
                            <img className='post-like-icon' src={`${PF}Person/like.png`} alt="" 
                            onClick={likeHandler}
                            
                            />
                            <img className='post-like-icon' src={`${PF}Person/heart.png`} alt="" 
                            onClick={likeHandler}
                            />
                            <span className="post-like-counter">{like} people liked </span>
                        </div>
                        <div className="post-bottom-right">
                            <span className="post-comment-text">{post.comment} comments </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}