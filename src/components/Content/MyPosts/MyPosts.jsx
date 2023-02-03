import React from 'react';
import './MyPosts.css'
import Post from './Post/Post';

let newPostElement=React.createRef();
let addPost=()=>{
     let text=newPostElement.current.value;
     alert(text)
}

const Posts =(props)=>{    
let postsElement=props.posts.map(element=> <Post message={element.message} likesCount={element.likesCount}/>)
    return(<div>My Posts
      <div><textarea ref={newPostElement}></textarea>
      <button onClick={addPost}> Add post</button></div>
     {
          postsElement
     }

    </div>
    )
        
}
export default Posts;
