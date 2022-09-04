import "./sidebar.css"
import sidebarpic from "../../assets/sidebarpic.PNG"
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() =>{
    const getCats = async ()=>
    {
      const res = await axios.get("/categories"); //get the objects in "/api/categories" array from backend.the "/api" was indicated by you in the package.json here after you installed axios. And thats the route you put the posts files in in the backend (.../api/categories).
      setCats(res.data);// setting/putting all the categories in the useState array
    }
    getCats();
  }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={sidebarpic} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore, vel hic eos nisi quisquam provident modi nam animi.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            {cats.map(c=>( //mapping through the categories array above. Below we then made each category a link to the queries in that category. Remember in the backend, we made the queries (".../?user..." and .../?cat..." ) for getting posts according to the author's username or category. 
             <Link to={`/?cat=${c.name}`} className="link">  
              <li className="sidebarListItem">{c.name}</li>  
              </Link>
            ))}
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  )
}
            
            
