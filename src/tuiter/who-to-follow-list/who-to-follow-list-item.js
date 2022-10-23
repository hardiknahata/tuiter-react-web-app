import React from "react";

const WhoToFollowListItem = (
 {
    who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa_logo.png' }
 }
) => {
 return(
    <div className="list-group-item">
    <div className={`ms-2 d-inline fw-bolder`}></div>
        <img className={`mt-1 float-start rounded-circle`} src={`/tuiter/images/${who.avatarIcon}`} width="40px"/>
    <div className={`fw-bolder d-inline-block`}>{who.userName} <i className={`fa fa-check-circle`}></i>
            <div className={`text-secondary fw-normal`}>
                @{who.handle}
            </div>
    </div>  
    <div className="float-end">
        <button className={`mt-1 btn btn-primary rounded-pill`}>Follow</button>                          
    </div>
    </div>
 );
};
export default WhoToFollowListItem;