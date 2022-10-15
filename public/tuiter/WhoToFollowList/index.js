import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
   return (`
        <div class="list-group">
        <p class="fw-bolder list-group-item m-0"> Who to follow </p>   
            ${
                who.map(profile => {
                   return(WhoToFollowListItem(profile));
                }).join('')
             }

        </div>`);
     }

export default WhoToFollowList;