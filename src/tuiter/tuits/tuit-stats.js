import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "../reducers/tuits-array-reducer";
import {useSelector} from "react-redux";
import { updateTuitThunk } from '../../services/tuits-thunks';

const TuitStats = (
    {
      post = { "avatarIcon": "profile-pictures/elonmusk.jpeg", "userName": "Elon Musk", "verified": true, "handle": "elonmusk", "time": "23h", "tuit": "Amazing show about @Inspiration4x mission!", "hasImage": true, "image": "inspiration4.jpeg", "hasLink": true, "link_title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site", "link_text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...", "link_url": "netflix.com", "comments": "4.2K", "retuits": "3.5K", "likes": "37.5K" }
    }
   ) => {
    // const post = useSelector(state => state.tuitsArray)
    const dispatch = useDispatch();

    const likeTuitHandler = (post) => {
        dispatch(likeTuit(post))
      }

    const unlikeTuitHandler = (post) => {
        dispatch(unlikeTuit(post))
      }


    return(
        <ul className="d-flex justify-content-between list-group list-group-horizontal">
            <li className="list-group-item text-nowrap border-0 override-lg text-secondary "> <a href="#" className="text-decoration-none text-secondary "> 
            <FontAwesomeIcon icon="comment" size="lg"/> <span className='text-secondary '> {post.retuits} </span> </a></li>
            
            <li className="list-group-item text-nowrap border-0 text-secondary override-lg"> <a href="#" className="text-secondary text-decoration-none"> 
            <FontAwesomeIcon icon="retweet" size="lg"/> <span className='text-secondary '> {post.retuits}</span></a></li>

          
            {/* <button>
            Likes: {post.likes}

            <i onClick={ () => dispatch(updateTuitThunk({
              ...post,
              likes: post.likes + 1
            }))
          } className="bi bi-heart-fill me-2 text-danger"> </i>
          </button>       */}

            { !post.liked &&
            <button
            onClick={() => likeTuitHandler(post)}
            className="list-group-item text-nowrap border-0 text-secondary override-lg">
            <FontAwesomeIcon icon="heart" size="lg"/>
            <span className='ms-1'>{post.likes}</span>
            </button>
            }            

            {
            post.liked &&
            <button
            onClick={() => unlikeTuitHandler(post)}
            className="list-group-item text-nowrap border-0 text-secondary override-lg">
            <FontAwesomeIcon icon="heart" color="red" size="lg"/>
            <span className='ms-1'>{post.likes}</span>
            </button>
            }

            <li className="list-group-item text-nowrap border-0 text-secondary override-lg"> <a href="#" className="text-secondary text-decoration-none"> 
            <FontAwesomeIcon icon="share" size="lg"/></a></li>
        </ul>
    );
   };
export default TuitStats;



