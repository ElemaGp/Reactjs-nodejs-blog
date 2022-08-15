import "./singlePost.css"
import singlepostpic from "../../assets/singlepostpic.jpg"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src={singlepostpic} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
              Lorem ipsum dolor sit amet.
              <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i className="singlePostIcon fa-regular fa-trash-can"></i>
              </div>
            </h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">Author: <b>Elema</b></span>
              <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed praesentium obcaecati, facere 
              a tenetur non fuga quod nisi. Maxime ullam libero cumque! Voluptatibus dicta maxime perspiciatis quod nam 
              fuga.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed praesentium obcaecati, facere 
              a tenetur non fuga quod nisi. Maxime ullam libero cumque! Voluptatibus dicta maxime perspiciatis quod nam 
              fuga.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed praesentium obcaecati, facere 
              a tenetur non fuga quod nisi. Maxime ullam libero cumque! Voluptatibus dicta maxime perspiciatis quod nam 
              fuga.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed praesentium obcaecati, facere 
              a tenetur non fuga quod nisi. Maxime ullam libero cumque! Voluptatibus dicta maxime perspiciatis quod nam 
              fuga.</p>
        </div>
    </div>
  )
}

