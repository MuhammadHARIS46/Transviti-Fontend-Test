import React, { useState } from "react";
import FilterBar from "../components/FilterBar/FilterBar";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import { jobSections } from "../data/jobsData";
import "./HomePageContent.css";
import JobSection from "../components/JobSection/JobSection";
import { similarJobTags } from "../data/similarTags";
import SimilarTags from "../components/SimilarTags/SimiliarTags";

const HomePageContent = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTag, setActiveTag] = useState("");

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleTagClick = (tag) => {
    setActiveTag((prev) => (prev === tag ? "" : tag));
    setSearch((prev) => (prev === tag ? "" : tag));
  };

  return (
    <div className="home-page-container">
      <WelcomeMessage
        userName={"Albert"}
        title={"Find your Dream Job,"}
        subMessage={
          "Explore the latest job openings and apply for the best opportunities available today!"
        }
      />
      <FilterBar
        searchValue={search}
        onSearchChange={setSearch}
        location={location}
        onLocationChange={setLocation}
        jobType={jobType}
        onJobTypeChange={setJobType}
        onSearchClick={handleSearch}
        loading={loading}
      />
      <SimilarTags
        tags={similarJobTags}
        onTagClick={handleTagClick}
        activeTag={activeTag}
      />
      {jobSections.map((section) => (
        <JobSection
          key={section.id}
          title={section.title}
          viewMoreText={section.viewMoreText}
          jobs={section.jobs}
        />
      ))}
    </div>
  );
};

export default HomePageContent;
