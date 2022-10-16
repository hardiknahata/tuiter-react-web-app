import PostItem from "./PostItem.js";
import tuits from "./tuits.js"

const PostList = () => {
   return (`            
            <ul class="list-group">
            ${
                tuits.map(tuit => {
                   return(PostItem(tuit));
                }).join('')
             }
            </ul>
        `);
     }

export default PostList;