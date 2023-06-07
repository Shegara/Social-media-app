import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Feed from "../../components/Feed/Feed"
import Rightbar from "../../components/Rightbar/Rightbar"
import './home.css'

export default function Home() {
  return (
    <div>
      <Navbar />
        <div className="home-container">
            <Sidebar />
            <Feed />
            <Rightbar />
          </div>
    </div>
  )
}
