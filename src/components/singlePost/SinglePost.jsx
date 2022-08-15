import "./singlePost.css"
import singlepostpic from "../../assets/singlepostpic.jpg"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src={singlepostpic} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.</h1>
        </div>
    </div>
  )
}
