import "./post.css"


export default function Post({post}) { //accepting the "post" prop from Posts component
  return (
    <div className="post">
      {post.photo && (                                      //if the user uploads a photo with the post...
        <img className="postImg" src={post.photo} alt="" />
        )}
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                {post.title}  {/*the post title*/}
            </span>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>         {/*the timestamp*/}

        </div>
        <p className="postDesc">
          {post.desc}
        </p>
    </div>
  )
}
        
