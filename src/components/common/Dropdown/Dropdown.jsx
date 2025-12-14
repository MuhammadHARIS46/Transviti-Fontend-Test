import "./Dropdown.css";

const Dropdown = ({
  value,
  onChange,
  options = [],
  placeholder = "Select",
  width = "180px",
}) => {
  return (
    <select
      className="dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width }}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
