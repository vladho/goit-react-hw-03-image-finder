import axios from "axios"

const fetchImage = ({ searchQuery, currentPage = 1 }) => {
  return axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20058045-402601a29cd896992a9fb1581&image_type=photo&orientation=horizontal&per_page=12`)
}

export default { fetchImage }
