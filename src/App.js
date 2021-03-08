import "./App.css"
import { Component } from "react"
import ImageGallery from "./Components/ImageGallery/ImageGallery"
import Searchbar from "./Components/Searchbar/Searchbar"
import servicesApi from "./services/gallery-api"
import Button from "./Components/Button/Button"
import Loader from "react-loader-spinner"
import Modal from "./Components/Modal/Modal"

class App extends Component {
  state = {
    webImage: [],
    largeImage: [],
    searchQuery: "",
    isLoading: false,
    currentPage: 1,
    error: null,
    showModal: false,
  }

  toggleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImage()
    }
  }

  // componentDidUpdate = () => {
  //   this.fetchArticles()

  // servicesApi.fetchImage().then((data) =>
  //   this.setState(
  //     // console.log(data.data.hits)
  //     {
  //       webImage: [...data.data.hits.map((el) => el.webformatURL)],
  //     }
  //   )
  // )
  // }
  onChangeQuery = (query) => {
    console.log(query)
    this.setState({
      webImage: [],
      largeImage: [],
      searchQuery: query,
      isLoading: false,
      currentPage: 1,
    })
  }

  fetchImage = () => {
    const { searchQuery, currentPage } = this.state
    const data = { searchQuery, currentPage }
    // console.log(test)
    this.setState({ isLoading: true })

    servicesApi
      .fetchImage(data)
      .then((data) =>
        this.setState((prevState) => ({
          webImage: [...prevState.webImage, ...data.data.hits.map((el) => el.webformatURL)],
          largeImage: [...prevState.largeImage, ...data.data.hits.map((el) => el.largeImage)],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .then(() => this.scroll())
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }))
  }
  // this.setState({
  //   webImage: servicesApi.fetchImage().then((data) => data.data.hits.map((el) => el)),
  // })

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }
  render() {
    const isLoading = this.state.isLoading
    const ifSearchNull = this.state.webImage.length > 0 && !isLoading
    const error = this.state.error

    // console.log(this.state.searchQuery)
    // console.log(this.fetchWebImage)
    // const webformatUrl = fetchImage().then((data) => data.data.hits.map((el) => el))
    // console.log(fetchImage().then((data) => data.data.hits.map((el) => el.webformatURL)))
    // console.log(webformatUrl)
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        {/* <ImageGallery webformatUrl={this.state.webImage} /> */}
        {error && <h1>Ooops what's wrong</h1>}
        <ImageGallery webformatUrl={this.state.webImage} />
        <button type="button" onClick={this.toggleModal}>
          {" "}
          Открыть
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              {" "}
              закрыть модалку
            </button>
          </Modal>
        )}
        {isLoading && <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}
        {ifSearchNull && <Button look={this.state.searchQuery} onClick={this.fetchImage} />}
      </div>
    )
  }
}

export default App
