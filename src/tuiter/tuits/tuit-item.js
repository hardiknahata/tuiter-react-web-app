import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../reducers/tuits-array-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const checkVerified = (post) => {
    if(post.verified){
        return <FontAwesomeIcon icon="check-circle"/>
    }
    return "";
}

const getPostTime = (post) => {
    if(post.time){
        return `· ${post.time}`;
    }
    return "";
}

const checkImage = (post) => {
    if(post.hasImage){
        return <img className="w-100 img-fluid rounded-top border-bottom border-secondary" src={`/tuiter/images/${post.image}`}/>;
    }
    return "";
}

const checkLink = (post) => {
    if(post.hasLink){
        return <div>
                    <p className="ps-2 pt-1 pe-1"> {post.link_title} <br></br>
                    <span className="text-secondary"> {post.link_text} </span>
                    <br></br>
                    <a className="text-secondary text-decoration-none" href="#"> <FontAwesomeIcon icon="link" /> {post.link_url} </a>
                    </p> 
              </div>
        
    }
    return "";
}

const renderTuit = (post) => {
    const tuitText = post.tuit.split(" ");
    var finalTuit = ``;

    for(let i = 0; i < tuitText.length; i++){
        if(tuitText[i].search('@') != -1){
            finalTuit += <a className="text-decoration-none">${tuitText[i]} </a>;
        }
        else{
            finalTuit += tuitText[i] + ' ';
        }
    }
    
    return finalTuit;
}



const TuitItem = (
    {
      post = { "image": "profile-pictures/elonmusk.jpeg", "userName": "Elon Musk", "verified": true, "handle": "elonmusk", "time": "23h", "tuit": "Amazing show about @Inspiration4x mission!", "hasImage": true, "image": "inspiration4.jpeg", "hasLink": true, "link_title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site", "link_text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...", "link_url": "netflix.com", "comments": "4.2K", "retuits": "3.5K", "likes": "37.5K" }
    }
   ) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
      }
     
    // const deleteTuitHandler = (id) => {
    //   dispatch(deleteTuit(id));
    // }

    return(
        <div className="mt-2 list-group-item override-lg">
        <img className={`profile-pic float-start rounded-circle`} src={`/tuiter/images/${post.image}`}/>
        <div className = "ps-5">
                <i className="bi bi-x-lg float-end"
                    onClick={() => deleteTuitHandler(post._id)}></i>
                <a className="float-end text-secondary" href="#"> <i className="fa-solid fa-ellipsis"></i> </a>    
                <div className="ps-2"> <b>{post.username}</b> {checkVerified(post)} <span className = "ps-1 text-secondary">{post.handle} {getPostTime(post)}</span>
                </div>
                <div className="ps-2 pt-2 pe-1">
                    <p className="ps-1"> {renderTuit(post)} <a className="text-decoration-none"> {post.tuitTextLink} </a> </p>

                    {/* <div className="border rounded border-secondary">
                        {checkImage(post)}
                        {checkLink(post)}
                        
                    </div> */}

                    <TuitStats key={post._id} post={post}/>
                </div>
        </div>
    </div>
    );
   };
export default TuitItem;
   