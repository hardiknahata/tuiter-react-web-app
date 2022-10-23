import React from "react";
import tuitsArray from './tuits.json';
import PostItem
  from "./post-item";

const PostList = () => {
   return (     
            <ul class="list-group">
             {
               tuitsArray.map(tuit => 
                  <PostItem
                  key={tuit._id} post={tuit}/> )
             }
            </ul>
        );
     }

export default PostList;