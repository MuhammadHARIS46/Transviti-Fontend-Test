import React from "react";
import "./ProfileSection.css";
import DropdownIcon from "../../assets/icons/drodpdown.svg"

const ProfileSection = ({
  coverImage,
  profileImage,
  name,
  title,
  location,
  profileVisitors,
  resumeViewers,
  myJobs,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-basic-info">
        <div
          className="profile-cover"
          style={{ backgroundImage: `url(${coverImage})` }}
        />
        <div className="profile-image-wrapper">
          <img src={profileImage} alt="profile" />
        </div>
        <div className="profile-info">
          <h2>{name}</h2>
          <p className="profile-title">{title}</p>
          <p className="profile-location">{location}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <span>Profile Visitors</span>
          <span className="value">{profileVisitors}</span>
        </div>
        <div className="stat">
          <span>Resume Viewers</span>
          <span className="value">{resumeViewers}</span>
        </div>
        <div className="stat">
          <span>My Jobs</span>
          <span className="value">{myJobs}</span>
        </div>
      </div>

      <div className="profile-calendar">
        <div>
          <span className="title">My calendar</span>
          <span className="sub-title">Upcoming Interviews</span>
        </div>
        <img src={DropdownIcon} alt={"DropdownIcon"} />
      </div>
    </div>
  );
};

export default ProfileSection;
