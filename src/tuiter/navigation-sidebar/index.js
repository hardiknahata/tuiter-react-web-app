import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
 const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];  
 return (
   <div className="list-group">

     <a className="list-group-item">Tuiter</a>

     <Link to="/tuiter/home" className={`d-inline list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`}>
       <span className={`d-none d-xl-inline d-xxl-inline`}>Home</span>
     </Link>

     <Link to="/tuiter/explore" className={`list-group-item list-group-item-action
                    ${active === 'explore'?'active':''}`}>
       <span className={`d-none d-xl-inline d-xxl-inline`}>Explore</span>
     </Link>

     <Link to="/" className="list-group-item">
       Labs
     </Link>

     <a className={`list-group-item list-group-item-action
                    ${active === 'notifications'?'active':''}`}>
       <span className={`d-none d-xl-inline d-xxl-inline`}>Notifications</span>
     </a>

     <a className={`list-group-item list-group-item-action
                    ${active === 'messages'?'active':''}`}>
       <span className={`d-none d-xl-inline d-xxl-inline`}>Messages</span>
     </a>

     <a className={`list-group-item list-group-item-action
                    ${active === 'bookmarks'?'active':''}`}>
       <span className={`d-none d-xl-inline d-xxl-inline`}>Bookmarks</span>
     </a>

     <a className={`list-group-item list-group-item-action
                    ${active === 'lists'?'active':''}`}>
       <span className={`d-none d-xl-inline d-xxl-inline`}>Lists</span>
     </a>

     <a className={`list-group-item list-group-item-action
                    ${active === 'profile'?'active':''}`}>
       <span className={`d-none d-xl-inline d-xxl-inline`}>Profile</span>
     </a>

     <a className={`list-group-item list-group-item-action
                    ${active === 'more'?'active':''}`}>
       <span className={`d-none d-xl-inline d-xxl-inline`}>More</span>
     </a>

   </div>
 );
};
export default NavigationSidebar;

