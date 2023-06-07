import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../Online/Online'


export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightbar = () => {
    return (
      <>
         <div className="birthday-container">
            <img className='birthday-image' src={`${PF}/Person/gift.png`} alt=""/>
            <span className="birthday-text">
              <b>Reha</b> and <b> 3 other friends</b> have a birthday today   
            </span>
          </div>
          <img src={`${PF}/Person/ad.png`} alt="" className="rightbar-ad" />
          <h4 className="rightbar-title">Online Friends</h4>
          <ul className="rightbar-friend">
            {Users.map(u=>(
              <Online key={u.id} user={u}/>
            ))}
          </ul>
      </>
    )
  };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbar-title'>User information</h4>
      <div className="rightbar-info">
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">From:</span>
          <span className="rightbar-info-value">{user.from}</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">City:</span>
          <span className="rightbar-info-value">{user.city}</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">Relationship:</span>
          <span className="rightbar-info-value">
            {user.relationship ===1
            ? "Single" 
            : user.relationship ===2
            ? "Taken"
            : "Married"}</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">Hobby:</span>
          <span className="rightbar-info-value">Cash</span>
        </div>
      </div>
      <h4 className='rightbar-title'>User Friends</h4>
      <div className="rightbar-follow">
        <div className="rightbar-follow-individual">
          <img src={`${PF}/Person/7.jpg`} alt="" className="rightbar-follow-image" />
          <span className="rightbar-follow-name"></span>
        </div>
        <div className="rightbar-follow-individual">
          <img src={`${PF}/Person/6.jpg`} alt="" className="rightbar-follow-image" />
          <span className="rightbar-follow-name"></span>
        </div>
        <div className="rightbar-follow-individual">
          <img src={`${PF}/Person/5.jpg`} alt="" className="rightbar-follow-image" />
          <span className="rightbar-follow-name"></span>
        </div>
        <div className="rightbar-follow-individual">
          <img src={`${PF}/Person/4.jpg`} alt="" className="rightbar-follow-image" />
          <span className="rightbar-follow-name"></span>
        </div>
        <div className="rightbar-follow-individual">
          <img src={`${PF}/Person/2.jpg`} alt="" className="rightbar-follow-image" />
          <span className="rightbar-follow-name"></span>
        </div>
        <div className="rightbar-follow-individual">
          <img src={`${PF}/Person/3.jpg`} alt="" className="rightbar-follow-image" />
          <span className="rightbar-follow-name"></span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
        <div className="rightbar-wrapper">
          {user ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
    </div>
  )
}

