import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
const Button = (props) => {
  console.log(props);
  return (
    <button
      style={{
        ...props.style,
        backgroundColor: props.bgcolor,
        color: props.color,
      }}
      type={props.type}
      className={style.Button}
    >
      {" "}
      {props.children}
    </button>
  );
};
//specification dans la console ce que l"on doit respecter dans l'app.jsx
Button.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  bgcolor: PropTypes.oneOf(["tomato", "skyblue", "lime"]),
  color: PropTypes.oneOf(["White", "black "]),
  children: PropTypes.any.isRequired,
  style: PropTypes.shape({
    width: PropTypes.string,
    height:PropTypes.string
  }),
};
export default Button;
