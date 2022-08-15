import "./post.css"
import postpic from "../../assets/postpic.jpg"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={postpic} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>

        </div>
        <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corrupti? Nesciunt, 
        numquam officia dolorem, reprehenderit quaerat impedit sed quam iste necessitatibus aliquam nisi odio 
        exercitationem culpa possimus iure sunt unde.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corrupti? Nesciunt, 
        numquam officia dolorem, reprehenderit quaerat impedit sed quam iste necessitatibus aliquam nisi odio 
        exercitationem culpa possimus iure sunt unde.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corrupti? Nesciunt, 
        numquam officia dolorem, reprehenderit quaerat impedit sed quam iste necessitatibus aliquam nisi odio 
        exercitationem culpa possimus iure sunt unde.
        </p>
    </div>
  )
}
        
