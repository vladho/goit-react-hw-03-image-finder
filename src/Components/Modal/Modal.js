import React, { Component } from "react"
import styles from "./Modal.module.css"
import { createPortal } from "react-dom"

const modalRoot = document.querySelector("#modal-root")
class Modal extends Component {
  componentDidMount() {
    console.log("did")
    window.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount() {
    console.log("will")
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    {
      if (e.code === "Escape") {
        console.log("dsf")
        this.props.onClose()
      }
    }
  }

  onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose()
    }
  }

  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.onBackdropClick}>
        <div className={styles.modal}> {this.props.children} </div>
      </div>,
      modalRoot
    )
  }
}

export default Modal
