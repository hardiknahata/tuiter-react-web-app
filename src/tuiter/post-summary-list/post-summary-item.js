import React from "react";

const checkVerified = (post) => {
  // if(post.verified){
  //     return `<i class="fa fa-check-circle"></i>`;
  // }
  return "";
}

const getPostTime = (post) => {
  if(post.time){
      return ` - ${post.time}`;
  }
  return "";
}

const getTuitCount = (post) => {
  if(post.tuit_count){
      return `${post.tuit_count} Tuits`;
  }
  return "";
}

const PostSummaryItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "tesla-logo.png",
     tuit_count: "",
     verified: true
   }
 }
) => {
 return(
  <li className="list-group-item">
    <div className="row">
      <div className={`col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9`}>
          
          <div className="text-secondary">
              {post.topic}
          </div>
          <div className={`d-inline fw-bolder`}>
          {post.userName} {checkVerified(post)} 
          </div>

          <span className="text-secondary"> {getPostTime(post)} </span>
          
          <div className={`fw-bolder text-wrap`}>
          {post.title}
          </div>

          <div className="text-secondary">
          {getTuitCount(post)}
          </div>    
          
      </div>
      <div className={`col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3`}>
          <img className={`float-end rounded`} src={`/tuiter/images/${post.image}`} width="100px" height="100px"/>
      </div>
    </div>
  </li>   
 );
};
export default PostSummaryItem;
