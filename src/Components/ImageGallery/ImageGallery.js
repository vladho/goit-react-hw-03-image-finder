import React from "react"
import PropTypes from "prop-types"
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
import styles from "./ImageGallery.module.css"

const ImageGallery = ({ imageURL }) => {
  return (
    <ul className={styles.imageGallery}>
      {imageURL.map((el) => (
        <ImageGalleryItem key={el.id} webformatUrl={el.webformatURL} largeImageURL={el.largeImageURL} />
      ))}
    </ul>
  )
}

ImageGallery.propTypes = {
  imageURL: PropTypes.array.isRequired,
}

export default ImageGallery
