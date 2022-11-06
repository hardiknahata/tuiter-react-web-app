import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TuitStats = (
    {
      post = { "avatarIcon": "profile-pictures/elonmusk.jpeg", "userName": "Elon Musk", "verified": true, "handle": "elonmusk", "time": "23h", "tuit": "Amazing show about @Inspiration4x mission!", "hasImage": true, "image": "inspiration4.jpeg", "hasLink": true, "link_title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site", "link_text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...", "link_url": "netflix.com", "comments": "4.2K", "retuits": "3.5K", "likes": "37.5K" }
    }
   ) => {

    return(
        <ul className="d-flex justify-content-between list-group list-group-horizontal">
            <li className="list-group-item text-nowrap border-0 override-lg"> <a href="#" className="text-secondary text-decoration-none"> <FontAwesomeIcon icon="comment" size="lg"/>  {post.comments} </a></li>
            <li className="list-group-item text-nowrap border-0 text-secondary override-lg"> <a href="#" className="text-secondary text-decoration-none"> <FontAwesomeIcon icon="retweet" size="lg"/> {post.retuits} </a></li>
            <li className="list-group-item text-nowrap border-0 text-secondary override-lg"> <a href="#" className="text-secondary text-decoration-none"> <FontAwesomeIcon icon="heart" color="red" size="lg"/> {post.likes} </a></li>
            <li className="list-group-item text-nowrap border-0 text-secondary override-lg"> <a href="#" className="text-secondary text-decoration-none"> <FontAwesomeIcon icon="share" size="lg"/></a></li>
        </ul>
    );
   };
export default TuitStats;