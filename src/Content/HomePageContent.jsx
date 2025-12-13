import React from "react";
import JobCard from "../components/JobCard/JobCard";

const HomePageContent = () => {
  return (
    <div>
      <JobCard
        promoted
        title="UI/UX Designer"
        company="Teams"
        location="Seattle, USA (Remote)"
        postedTime="1 day ago"
        applicants={22}
        onApply={() => console.log("Apply clicked")}
        onSave={() => console.log("Saved")}
        width={"115px"}
      />
    </div>
  );
};

export default HomePageContent;
