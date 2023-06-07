import { CastForEducation } from '@material-ui/icons'
import './closeFriend.css'

export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div>
        <li className="sidebar-friend">
            <img className='sidebar-friend-icon' src={PF+user.profilePicture}></img>
            <span className="sidebar-friend-username">{user.username}</span>                
        </li>  
    </div>
  )
}
