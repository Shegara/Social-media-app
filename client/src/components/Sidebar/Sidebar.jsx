import './sidebar.css'
import {RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, Event, School, WorkOutline, HelpOutline} from '@material-ui/icons'
import CloseFriend from '../CloseFriend/CloseFriend'
import { Users } from '../../dummyData'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-container">
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <RssFeed className='sidebar-list-item-icon'/>
                    <span className='sidebar-list-item-text'>Feed</span>
                </li>  
                <li className="sidebar-list-item">
                    <Chat className='sidebar-list-item-icon'/>
                    <span className='sidebar-list-item-text'>Chats</span>
                </li>  
                <li className="sidebar-list-item">
                    <PlayCircleFilledOutlined className='sidebar-list-item-icon'/>
                    <span className='sidebar-list-item-text'>Videos</span>
                </li>  
                <li className="sidebar-list-item">
                    <Group className='sidebar-list-item-icon'/>
                    <span className='sidebar-list-item-text'>Groups</span>
                </li>  
                <li className="sidebar-list-item">
                    <Bookmark className='sidebar-list-item-icon'/>
                    <span className='sidebar-list-item-text'>Bookmarks</span>
                </li>  
                <li className="sidebar-list-item">
                    <HelpOutline className='sidebar-list-item-icon'/>
                    <span className='sidebar-list-item-text'>Questions</span>
                </li>  
                <li className="sidebar-list-item">
                    <WorkOutline className='sidebar-list-item-icon'/>
                    <span className='sidebar-list-item-text'>Jobs</span>
                </li>  
                <li className="sidebar-list-item">
                    <Event className='sidebar-list-item-icon'/>
                    <span className='sidebar-list-item-text'>Events</span>
                </li>  
                <li className="sidebar-list-item">
                    <School className='sidebar-list-item-icon'/>
                    <span className='sidebar-list-item-text'>Courses</span>
                </li>  
            </ul>
            <button className='sidebar-button'>Show More</button>
            <hr className='sidebar-line'></hr>
            <ul className="sidebar-friend-list">
            {Users.map(u => (
                <CloseFriend user={u} key={u.id}/>    
            ))}                            
            </ul>
        </div>
    </div> 
  )
}