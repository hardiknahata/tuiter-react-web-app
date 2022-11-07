import React from "react";
import {useSelector} from "react-redux";
import UserProfile from "./profile-item";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return(
          <UserProfile key={profile._id} profile={profile}/>
    );
};
export default ProfileComponent;