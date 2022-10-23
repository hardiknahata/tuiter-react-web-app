import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationSidebar = () => {
 const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];  
 return (
   <div className="list-group">

     <a className="list-group-item"> <FontAwesomeIcon  icon={["fab", "twitter"]}/></a>

     <Link to="/tuiter/home" className={`d-inline list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`}> <FontAwesomeIcon icon="home"/>
       <span className={`d-none d-xl-inline d-xxl-inline`}> Home</span>
     </Link>

     <Link to="/tuiter/explore" className={`list-group-item list-group-item-action
                    ${active === 'explore'?'active':''}`}> <FontAwesomeIcon icon="hashtag"/>
       <span className={`d-none d-xl-inline d-xxl-inline`}> Explore</span>
     </Link>

     <Link to="/" className="list-group-item">
       Labs
     </Link>

     <a className={`list-group-item list-group-item-action
                    ${active === 'notifications'?'active':''}`}> <FontAwesomeIcon icon="bell"/>
       <span className={`d-none d-xl-inline d-xxl-inline`}> Notifications</span>
     </a>

     <a className={`list-group-item list-group-item-action
                    ${active === 'messages'?'active':''}`}> <FontAwesomeIcon icon="envelope"/>
       <span className={`d-none d-xl-inline d-xxl-inline`}> Messages</span>
     </a>

     <a className={`list-group-item list-group-item-action
                    ${active === 'bookmarks'?'active':''}`}> <FontAwesomeIcon icon="bookmark"/>
       <span className={`d-none d-xl-inline d-xxl-inline`}> Bookmarks</span>
     </a>

     <a className={`list-group-item list-group-item-action
                    ${active === 'lists'?'active':''}`}> <FontAwesomeIcon icon="list"/>
       <span className={`d-none d-xl-inline d-xxl-inline`}> Lists</span>
     </a>

     <a className={`list-group-item list-group-item-action
                    ${active === 'profile'?'active':''}`}> <FontAwesomeIcon icon="user"/>
       <span className={`d-none d-xl-inline d-xxl-inline`}> Profile</span>
     </a>

     <a className={`list-group-item list-group-item-action
                    ${active === 'more'?'active':''}`}>
       <span className={`d-none d-xl-inline d-xxl-inline`}>More</span>
     </a>

   </div>
 );
};
export default NavigationSidebar;

