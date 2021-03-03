import React from "react"
// import PropTypes from "prop-types"
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
import styles from "./ImageGallery.module.css"

const ImageGallery = ({ webformatUrl }) => {
  //   console.log(webformatUrl)
  return (
    <ul className={styles.imageGallery}>
      {webformatUrl.map((el) => (
        <ImageGalleryItem key={el} webformatUrl={el} />
      ))}
    </ul>
  )
}

ImageGallery.propTypes = {}

export default ImageGallery
