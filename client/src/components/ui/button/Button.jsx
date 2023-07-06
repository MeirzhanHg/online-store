import "./Button.scss";

const Button = ({ children, classNames, background }) => {
  return (
    <button
      className={`button-custom ${classNames}`}
      style={{ backgroundColor: background && "#0F6" }}
    >
      {children}
    </button>
  );
};

export default Button;
