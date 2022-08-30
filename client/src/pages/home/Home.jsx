import "./home.css"
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios"; //importing axios

export default function Home() {
  const [posts, setPosts] = useState([]); //for the array of posts to be displayed, or to display one of the postss if necessary
  
  useEffect(()=>{ //fetching posts from backend
    const fetchPosts = async () =>{
      const res = await axios.get("/posts") //axios helps frontend interact with backend (yarn add axios). yarn add axios. import it above and write your proxy in package.json. The "/posts" here represents the route it will access after the prior domain url you indicated in the package.json's proxy file you wrote. 
      setPosts(res.data)
    }
    fetchPosts()
  },[])

  return (
    <>
    <Header />
    <div className="home">
        <Posts posts={posts} /> {/*passing the const post as a prop into the "Posts" compoenent */}
        <Sidebar />
    </div>
    </>
  )
}
