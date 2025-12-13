import "./JobCard.css";
import Button from "../common/Button/Button";

import teamsIcon from "../../assets/images/Teams.png";
import locationIcon from "../../assets/icons/LocationIcon.svg";
import clockIcon from "../../assets/icons/ClockIcon.svg";
import bookmarkIcon from "../../assets/icons/SaveIcon.svg";

const JobCard = ({
  promoted = false,
  title,
  company,
  location,
  postedTime,
  applicants,
  onApply,
  onSave
}) => {
  return (
    <div className="job-card">
      {promoted && <span className="promoted">Promoted</span>}

      <div className="job-header">
        <img src={teamsIcon} alt="Company" className="company-icon" />

        <div className="job-info">
          <h3>{title}</h3>
          <p className="company">{company}</p>
        </div>
      </div>

      <div className="job-meta">
        <div className="meta-item">
          <img src={locationIcon} alt="Location" />
          <span>{location}</span>
        </div>

        <div className="meta-item">
          <img src={clockIcon} alt="Time" />
          <span>
            {postedTime} | <span className="applicants">{applicants} applicants</span>
          </span>
        </div>
      </div>

      <div className="job-footer">
        <Button label="Apply Now" onClick={onApply} />
        <img
          src={bookmarkIcon}
          alt="Save"
          className="save-icon"
          onClick={onSave}
        />
      </div>
    </div>
  );
};

export default JobCard;
