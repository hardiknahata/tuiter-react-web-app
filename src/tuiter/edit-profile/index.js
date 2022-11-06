import "./index.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EditProfile = () => {
    const profileDetails = useSelector(state => state.profile);
    let [profile, setProfile]  = useState(profileDetails);
    const dispatch = useDispatch();
    
    const editProfileHandler = () => {
        dispatch(updateProfile({
            ...profile,
            firstName: profile.firstName,
            lastName:profile.lastName,
            bio: profile.bio,
            location: profile.location,
            website: profile.website,
            dateOfBirth: profile.dateOfBirth}));
    }

    return(

        <div className="row">
            <div>
                <Link to="/tuiter/profile" className="rounded-pill btn btn-dark fw-bold"> X </Link>                
                
                <span class=" ms-5 wd-title-size fw-bold">Edit Profile</span>
                <span><Link to="/tuiter/profile" className="btn btn-dark fw-bold rounded-pill float-end mb-2"
                              onClick={editProfileHandler}>Save    
                </Link></span>
            </div>

            <div className="mb-5">
                <img className="w-100 ms-0 mt-0 wd-banner-image border-0" src={`${profile.bannerPicture}`}  />
                <img className="mt-5 wd-profile-picture rounded-circle border-0" src={`${profile.profilePicture}`} />
            </div>

            <div className="border mt-5">
                Name
                <input value={profile.firstName} className="form-control border-0"
                          onChange={(event) => setProfile({...profile, firstName:event.target.value})}/>
            </div>

            <div className="mt-4 border">
                Last Name
                <input value={profile.lastName} className="form-control border-0"
                          onChange={(event) => setProfile({...profile, lastName: event.target.value})}/>
            </div>
            <div className="mt-4 border">
                Bio
                <textarea value={profile.bio} className="form-control border-0"
                          onChange={(event) => setProfile({...profile, bio: event.target.value})}/>
            </div>
            <div className="mt-4 border">
                Location
                <input value={profile.location} className="form-control border-0"
                          onChange={(event) => setProfile({...profile, location: event.target.value})}/>
            </div>
            <div className="mt-4 border">
                Website
                <input value={profile.website} className="form-control border-0"
                       onChange={(event) => setProfile({...profile, website: event.target.value})}/>
            </div>
            <div className="mt-4 border">
                Birth Date
                <input value={profile.dateOfBirth}
                       className="form-control border-0"
                       onChange={(event) => setProfile({...profile, dateOfBirth: event.target.value})}/>
            </div>
            <div className="text-secondary mt-4 mb-3">
                Switch to professional
                <span className="float-end"><FontAwesomeIcon icon="fa-solid fa-angle-right"/></span>
            </div>
        </div>

    );
};

export default EditProfile;