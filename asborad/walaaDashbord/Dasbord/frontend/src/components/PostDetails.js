//import { usePostsContext } from "../hooks/usePostsContext"


const PostDetails =({ post }) => {
    //const { dispatch } = usePostsContext()
    const handleClick = async () => {
        const response = await fetch('/api/posts' + post._id, {
            methode: 'DELETE'
        })
        // const json = await response.json()
        
        if(response.ok){
            console.log('delete')
        }
   
    
        
    }
    return(
          <div className="post-details">
           <h4>{post.username}</h4>
           <p><strong>Content:</strong>{post.content}</p>
           <p><strong>Caption:</strong>{post.caption}</p>
            <p><strong>UsersWhoLiked:</strong>{post.usersWhoLiked}</p>
            <p><strong>Media:</strong>{post.media}</p>
            <p>{post.createdAt}</p>
            <span onClick={handleClick}>delete</span>
           </div>
    )
}

export default PostDetails
