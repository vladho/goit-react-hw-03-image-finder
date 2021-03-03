import React from "react"
// import PropTypes from "prop-types"
import styles from "./ImageGalleryItem.module.css"

const ImageGalleryItem = ({ webformatUrl }) => {
  //   console.log(webformatUrl)
  return (
    <li className={styles.imageGalleryItem}>
      <img src={webformatUrl} alt="" className={styles.image} />
    </li>
  )
}

ImageGalleryItem.propTypes = {}

export default ImageGalleryItem
