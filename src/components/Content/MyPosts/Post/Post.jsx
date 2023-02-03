import React from 'react';
import './Post.css'

const Post =(props)=>{
     let likes=[
          {likesCount:32},
          {likesCount:93},
          {likesCount:3},
          {likesCount:9}];  
    
    return( 
    <div><div className='item-post'>
      <img src="https://otkritkis.com/wp-content/uploads/2022/06/qfrzj.jpg" alt="" />
      {props.message}
      <div>

      <span> like </span> {props.likesCount} 
      </div>
      </div>
      </div>
    )
        
}
export default Post;
