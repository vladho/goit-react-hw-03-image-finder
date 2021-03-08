import React from "react"
// import PropTypes from "prop-types"
import styles from "./ImageGalleryItem.module.css"

const ImageGalleryItem = ({ webformatUrl }) => {
  //   console.log(webformatUrl)

  const onClickImage = (e) => {
    console.log(e.target)
    console.log(e.currentTarget)
  }

  return (
    <li className={styles.imageGalleryItem} onClick={onClickImage}>
      <img src={webformatUrl} alt="" className={styles.image} />
    </li>
  )
}

ImageGalleryItem.propTypes = {}

export default ImageGalleryItem
