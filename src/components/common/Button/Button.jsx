import "./Button.css";

const Button = ({ label, onClick, type = "primary", disabled = false,width="auto" }) => {
  return (
    <button
      className={`btn btn-${type}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        width:width
      }}
    >
      {label}
    </button>
  );
};

export default Button;
