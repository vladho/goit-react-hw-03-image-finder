// import React from "react"
import axios from "axios"

const whatToLook = "cat"

const fetchImage = () => {
  return axios.get(`https://pixabay.com/api/?q=${whatToLook}&page=1&key=20058045-402601a29cd896992a9fb1581&image_type=photo&orientation=horizontal&per_page=12`)
}
// console.log(fetchImage)

export default { fetchImage }
