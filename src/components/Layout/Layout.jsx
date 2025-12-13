import React from "react";
import Navbar from "../Navbar/Navbar";
import ProfileSection from "../ProfileSection/ProfileSection";
import "./Layout.css";
import cover from "../../assets/images/CoverImage.png";
import profile from "../../assets/images/ProfileImage.png";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <ProfileSection
          coverImage={cover}
          profileImage={profile}
          name="Albert Flores"
          title="Senior Product Designer | UI/UX Designer | Graphic Designer"
          location="Clinton, Maryland"
          profileVisitors={140}
          resumeViewers={20}
          myJobs={88}
        />
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
