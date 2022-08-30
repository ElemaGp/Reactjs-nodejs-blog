import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"
import profilepic from "../../assets/profilepic.jpg"
export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={profilepic} alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file"  id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Elema" />
                <label>Email</label>
                <input type="email" placeholder="elemagodspower@gmail.com" />
                <label>Password</label>
                <input type="password"  />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
