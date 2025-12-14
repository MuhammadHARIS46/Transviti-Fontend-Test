import "./Button.css";

const Button = ({
  label,
  onClick,
  type = "primary",
  disabled = false,
  width = "auto",
  icon = null,
  loading = false,
}) => {
   return (
    <button
      className={`btn btn-${type}`}
      onClick={onClick}
      disabled={disabled || loading}
      style={{ width }}
    >
      {loading ? (
        <span className="btn-spinner" />
      ) : (
        <>
          {icon && < img src={icon} className="btn-icon"/>}
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

export default Button;
