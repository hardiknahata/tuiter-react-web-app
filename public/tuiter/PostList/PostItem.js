const checkVerified = (post) => {
    if(post.verified){
        return `<i class="ps-1 pt-1 fa fa-check-circle"></i>`;
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
        return `<img class="w-100 img-fluid rounded border-bottom border-secondary" src="${post.image}"/>`;
    }
    return "";
}

const checkLink = (post) => {
    if(post.hasLink){
        return `
            <p class="ps-2 pt-1 pe-1"> ${post.link_title} <br>
            <span class="text-secondary"> ${post.link_text}
            </span>
            <br>
            <a class="text-secondary text-decoration-none" href="#"> <i class="fa-solid fa-link"></i> ${post.link_url} </a>
            </p>        
        `;
    }
    return "";
}




 const PostItem = (post) => {
    return(`
    <div class="mt-2 list-group-item override-lg">
        <img class="profile-pic float-start rounded-circle" src="${post.avatarIcon}"/>
        <div class = "ps-5">
            <a class="float-end text-secondary" href="#"> <i class="fa-solid fa-ellipsis"></i> </a>    
            <div class="ps-2"> ${post.userName} ${checkVerified(post)} <span class = "ps-1 text-secondary">@${post.handle} ${getPostTime(post)}</span>
            </div>
            <div class="ps-2 pt-2 pe-1">
                <p class="ps-1"> ${post.tuit} </p>
                <div class="border rounded border-secondary">
                    ${checkImage(post)}
                    ${checkLink(post)}
                </div>

                <ul class="d-flex justify-content-between list-group list-group-horizontal wd-reactions">
                    <li class="list-group-item text-nowrap border-0 override-lg"> <a href="#" class="text-secondary text-decoration-none"> <i class="fa-regular fa-comment"></i> &nbsp; ${post.comments} </a></li>
                    <li class="list-group-item text-nowrap border-0 text-secondary override-lg"> <a href="#" class="text-secondary text-decoration-none"> <i class="fa-solid fa-retweet"></i> &nbsp; ${post.retuits} </a></li>
                    <li class="list-group-item text-nowrap border-0 text-secondary override-lg"> <a href="#" class="text-secondary text-decoration-none"> <i class="fa-regular fa-heart"></i> &nbsp; ${post.likes} </a></li>
                    <li class="list-group-item text-nowrap border-0 text-secondary override-lg"> <a href="#" class="text-secondary text-decoration-none"> <i class="fa-solid fa-arrow-up-from-bracket"></i></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    `);
 }

 export default PostItem;