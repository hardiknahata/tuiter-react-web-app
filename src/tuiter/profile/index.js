import React from "react";
import {useSelector} from "react-redux";
import UserProfileItem from "./profile-item";
import "./index.css";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return(
          <UserProfileItem key={profile._id} profile={profile}/>
    );
};
export default ProfileComponent;