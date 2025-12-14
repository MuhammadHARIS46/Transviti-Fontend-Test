import "./JobSection.css";
import JobCard from "../JobCard/JobCard";
import { Link } from "react-router-dom";

const JobSection = ({ title, viewMoreText, jobs }) => {
  return (
    <section className="job-section">
      <div className="job-section-header">
        <h2>{title}</h2>
        <Link to="/" className="view-more-btn">
          {viewMoreText}
        </Link>
      </div>

      <div className="job-grid">
        {jobs.slice(0,8).map((job) => (
          <JobCard
            key={job.id}
            promoted={job.promoted}
            title={job.title}
            company={job.company}
            location={job.location}
            postedTime={job.postedTime}
            applicants={job.applicants}
            onApply={() => console.log("Apply", job.id)}
            onSave={() => console.log("Save", job.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default JobSection;
