import "./FilterBar.css";
import Button from "../common/Button/Button";
import Dropdown from "../common/Dropdown/Dropdown";
import SearchIcon from "../../assets/icons/SearchIconWhite.svg"
import { jobLocationOptions, jobTypeOptions } from "../../data/dropdownOptions";

const FilterBar = ({
  searchValue,
  onSearchChange,
  location,
  onLocationChange,
  jobType,
  onJobTypeChange,
  onSearchClick,
  loading = false,
}) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        className="filter-input"
        placeholder="Job title, company, or keywords"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <Dropdown
        value={location}
        onChange={onLocationChange}
        placeholder="Select Location"
        options={jobLocationOptions}
      />

      <Dropdown
        value={jobType}
        onChange={onJobTypeChange}
        placeholder="Job Type"
        options={jobTypeOptions}
      />

      <Button
        label="Search"
        icon={SearchIcon}
        onClick={onSearchClick}
        loading={loading}
        width="120px"
      />
    </div>
  );
};

export default FilterBar;
