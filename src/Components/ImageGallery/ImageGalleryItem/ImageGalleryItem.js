import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "./ImageGalleryItem.module.css"
import Modal from "../../Modal/Modal"

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }))
  }

  render() {
    return (
      <li className={styles.imageGalleryItem}>
        <img src={this.props.webformatUrl} alt="" className={styles.image} onClick={this.toggleModal} />

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.props.largeImageURL} alt="" />
          </Modal>
        )}
      </li>
    )
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
}

export default ImageGalleryItem
