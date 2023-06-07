import './online.css'

export default function online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="rightbar-friend-item">
        <div className="rightbar-image-container">
            <img className='rightbar-profile-image' 
            src={PF+user.profilePicture}
            alt="" />
            <span className="rightbar-online"></span>
        </div>
        <span className="rightbar-username">{user.username}</span>
    </li>
  )
}
