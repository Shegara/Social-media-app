import './navbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


export default function Navbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const {user} = useContext(AuthContext)

  return (
    <div className='navbar-container'>
        <div className="navbar-left">
          <Link to='/' style={{textDecoration:"none"}}>
            <span className="navbar-logo">Shegosocial</span>
          </Link>
        </div>
        <div className="navbar-center">
          <div className="navbar-searchbar">
            <Search className='search-icon'/>
            <input type="text" className="search-input" placeholder='Search: '/>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-links">
            <span className="navbar-link">Homepage</span>
            <span className="navbar-link">Timeline</span>
          </div>
          <div className="navbar-icons">
            <div className="navbar-icon-item">
              <Person />
              <span className="navbar-icon-badge">1</span>
            </div>
            <div className="navbar-icon-item">
              <Chat />
              <span className="navbar-icon-badge">3</span>
            </div>
            <div className="navbar-icon-item">
              <Notifications />
              <span className="navbar-icon-badge">1</span>
            </div>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img src=
                {
                  user.profilePicture 
                  ? PF + user.profilePicture 
                  : PF+'Person/General.jpeg' 
                }
                alt='' 
                className="navbar-image">
            </img>
            </Link>
        </div>
    </div>
  )
}
