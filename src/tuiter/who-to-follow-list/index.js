import React from "react";
// import whoArray from './who.json';
import {useSelector} from "react-redux";
import WhoToFollowListItem
  from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  const whoArray = useSelector(
    (state) => state.who);
 return(
   <ul className="list-group">
     <li className="list-group-item">
       <h3>Who to follow</h3>
     </li>
     {
       whoArray.map(who =>
         <WhoToFollowListItem
           key={who._id}
           who={who}/>
       )
     }
   </ul>
 );
};

export default WhoToFollowList;

// import React from "react";
// import whoArray from './who.json';
// import WhoToFollowListItem
//   from "./who-to-follow-list-item";

// const WhoToFollowList = () => {
//  return(
//    <ul className="list-group">
//      <li className={`fw-bolder list-group-item m-0`}>
//        <h3>Who to follow</h3>
//      </li>
//      {
//        whoArray.map(who =>
//          <WhoToFollowListItem
//            key={who._id}
//            who={who}/>
//        )
//      }
//    </ul>
//  );
// };

// export default WhoToFollowList;