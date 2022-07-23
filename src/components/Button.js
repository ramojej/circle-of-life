import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  btn,
  btnWhite,
  btnBlue,
  btnTextWhite,
} from "../styles/button.module.css"

const Button = ({ color, height, width, text, link, textColor }) => {
  let btnColor

  switch (color) {
    case "white":
      btnColor = btnWhite
      break
    default:
      btnColor = btnBlue
      break
  }
  //console.log(btnColor)
  return (
    <Link
      to={link}
      className={`${btn} ${btnColor} ${
        height === "large" ? "btn-tall" : "btn-short"
      } ${width === "large" ? "btn-wide" : "btn-narrow"} ${
        textColor ? btnTextWhite : "text-primary"
      }`}
    >
      {text}
    </Link>
  )
}

Button.defaultProps = {
  height: "short",
  width: "narrow",
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  textColor: PropTypes.string,
}

export default Button
