import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserProfileItem = (
    {
        profile = {
            firstName: 'Elon', 
            lastName: 'Musk', 
            handle: 'elonmusk',
            profilePicture: '/tuiter/images/profile-pictures/elonmusk.jpeg', 
            bannerPicture: 'spacex.jpeg',
            bio: 'Creating tech to disrupt the world.',
            website: 'www.twitter.com/elonmusk',
            location: 'Fremont, CA',	
            dateOfBirth: '7/7/1968',	
            dateJoined: '4/2009',
            followingCount: 9832,	followersCount: 63655, tuits: "1024"
        }
    }
) => {
    return(
            <div className="row">
                <div className="col-1">
                    <button class="bg-white border-0"><FontAwesomeIcon icon="fa-solid fa-arrow-left fa-2x" /></button>
                </div>
                <div className="col-10">
                    <div class="wd-name-font">
                        <span class="fw-bold ">{profile.firstName} </span>
                        <span class="fw-bold">{profile.lastName}</span> <br/>
                    </div>
                    <div class="wd-tuit-font ms-1">
                        <span>{profile.tuits} </span>
                        <span>Tuits</span>
                    </div>
                </div>
                <div className="mt-0 ms-0 position-relative">
                    <img className="w-100 ms-0 mt-0 wd-banner-image border-0" src={`${profile.bannerPicture}`}  />
                    <img className="wd-profile-picture rounded-circle border-0" src={`${profile.profilePicture}`} />
                </div>
                <div className="mt-2">
                    <Link to="/tuiter/edit-profile" className="btn btn-outline-dark rounded-pill float-end fw-bold">Edit profile</Link>
                </div>

                <div>
                    <div className="mt-5 wd-name-font">
                        <span className="fw-bold ">{profile.firstName} </span>
                        <span className="fw-bold">{profile.lastName}</span>
                    </div>
                    <div className="text-secondary wd-tuit-font">
                        <span>@{profile.handle} </span>
                    </div>
                    <div class={"mt-3"}>
                        <p>{profile.bio}</p>
                    </div>
                    <div class="row text-secondary">
                        <div class="col-3">
                            <span><i className="bi bi-geo-alt me-2"></i></span>
                            <span>{profile.location}</span>
                        </div>
                        <div className="col-3">
                            <span><i className="bi bi-balloon me-2"></i></span>
                            <span>Born {profile.dateOfBirth}</span>
                        </div>
                        <div className="col-6">
                            <span><i className="bi bi-calendar3 me-2"></i></span>
                            <span>Joined {profile.dateOfBirth}</span>
                        </div>
                    </div>
                    <div class="mt-3">
                        <span class="fw-bold">{profile.followingCount}</span>
                        <span class="ms-1">Following</span>
                        <span class="fw-bold ms-4">{profile.followersCount}</span>
                        <span className="ms-1">Followers</span>
                    </div>
                </div>
            </div>
    );
};

export default UserProfileItem;