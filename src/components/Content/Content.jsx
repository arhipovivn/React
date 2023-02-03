import React from 'react';
import './Content.css';
import ContentInfo from './ContentInfo/ContentInfo.jsx';
import Posts from './MyPosts/MyPosts.jsx';


const Content =(props)=>{

   
   
    return(
        <div className='content'> 
      <ContentInfo/>
          <Posts posts={props.posts}/>
      </div>
    );
}
export default Content;
