import Post from "../post/Post"
import "./posts.css"

export default function Posts({posts}) {  //accepting the "posts" prop from Home page
  return (
    <div className='posts'>
      {posts.map(p => ( //mapping through all the posts
        <Post post={p} /> //passing the p in this component as prop to the 'Post' component. We'll call it 'post' there
      ))}
    </div>
  )
}

        
