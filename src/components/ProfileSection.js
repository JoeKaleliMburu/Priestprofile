import React from "react";
import profile from "../Gallery/RevRuth.png"

function ProfileSection() {
    return (
        <div classname='profile-section'>
            <div classname='profile-img'>
                <img src={profile} alt="profile"/>
            </div>
            <div className='title'>
                <p>Name and Title</p>
            </div>
            <div className='short-biograpy'>
                <p>Short Biography</p>
            </div>

        </div>
    )
    };

    export default ProfileSection