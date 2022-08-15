import "./header.css"
import homepic from "../../assets/homepic.jpg";

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={homepic} alt="" />
    </div>
  )
}
