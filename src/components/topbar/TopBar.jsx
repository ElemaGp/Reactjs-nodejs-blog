import './topbar.css'
import ME from '../../assets/me.JPG'

/* you have to copy/paste font awesome cjn in the index.html before using font awesome icons in react (unlike with react-icons) */

export default function 
topBar() {
  return (
    <div className='top'>
        <div className="topIcon topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
              <li className="topListItem">HOME</li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">WRITE</li>
              <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className='topImg' src={ME} alt='' />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
