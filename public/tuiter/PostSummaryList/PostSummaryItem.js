const checkVerified = (post) => {
    if(post.verified){
        return `<i class="fa fa-check-circle"></i>`;
    }
    return "";
}

const getPostTime = (post) => {
    if(post.time){
        return `&nbsp; - ${post.time}`;
    }
    return "";
}

const getTuitCount = (post) => {
    if(post.tuit_count){
        return `${post.tuit_count} Tuits`;
    }
    return "";
}


 const PostSummaryItem = (post) => {
    return(`
            <li class="list-group-item">
            <div class="row">
                <div class="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-10">
                    <span>
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="d-inline fw-bolder">
                    ${post.userName} ${checkVerified(post)} 
                    </div>

                    <span class="text-secondary"> ${getPostTime(post)} </span>
                    
                    <div class="fw-bolder text-wrap">
                    ${post.title}
                    </div>

                    <div class="text-secondary">
                    ${getTuitCount(post)}
                    </div>    
                    
                </div>
                <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-2">
                    <img class="float-end rounded" src="${post.image}" width="100px" height="100px">
                </div>
            </div>
        </li>       
    `);
 }

 export default PostSummaryItem;