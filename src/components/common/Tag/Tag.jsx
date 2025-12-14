import "./Tag.css";

const Tag = ({ label, active = false, onClick }) => {
  return (
    <button
      className={`tag ${active ? "tag-active" : ""}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export default Tag;
