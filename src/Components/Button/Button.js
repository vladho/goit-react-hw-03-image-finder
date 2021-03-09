import React from "react"
import PropTypes from "prop-types"
import styles from "./Button.module.css"

const Button = ({ look, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      more {look}
    </button>
  )
}

Button.propTypes = {
  look: PropTypes.string.isRequired,
  onclick: PropTypes.func,
}

export default Button
