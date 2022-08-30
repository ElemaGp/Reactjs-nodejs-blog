import './topbar.css'
import ME from '../../assets/me.JPG'
import { Link } from 'react-router-dom';

/* you have to copy/paste font awesome cjn in the index.html before using font awesome icons in react (unlike with react-icons) */

export default function 
topBar() {
  const user = false;
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
              <li className="topListItem"><Link to="/" className='link'>HOME</Link></li>
              <li className="topListItem"><Link to="/" className='link'>ABOUT</Link></li>
              <li className="topListItem"><Link to="/" className='link'>CONTACT</Link></li>
              <li className="topListItem"><Link to="/write" className='link'>WRITE</Link></li>
              <li className="topListItem">
                {user && "LOGOUT"}
              </li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className='topImg' src={ME} alt='' />
            ) : (
              <ul className='topList'>
                <li className="topListItem"><Link to="/login" className='link'>LOGIN</Link></li>
                <li className="topListItem"><Link to="/register" className='link'>REGISTER</Link></li>
              </ul>
            )
          }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
