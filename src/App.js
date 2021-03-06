import "./App.css"
import { Component } from "react"
import ImageGallery from "./Components/ImageGallery/ImageGallery"
import Searchbar from "./Components/Searchbar/Searchbar"
import servicesApi from "./services/gallery-api"
import Button from "./Components/Button/Button"

class App extends Component {
  state = {
    webImage: [],
    searchQuery: "",
    isLoading: false,
    currentPage: 1,
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
      searchQuery: query,
      isLoading: false,
      currentPage: 1,
    })
  }

  fetchImage = () => {
    const { searchQuery, currentPage } = this.state
    const test = { searchQuery, currentPage }
    // console.log(test)
    this.setState({ isLoading: true })
    servicesApi
      .fetchImage(test)
      .then((data) =>
        this.setState((prevState) => ({
          webImage: [...prevState.webImage, ...data.data.hits.map((el) => el.webformatURL)],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .finally(this.setState({ isLoading: false }))
  }
  // this.setState({
  //   webImage: servicesApi.fetchImage().then((data) => data.data.hits.map((el) => el)),
  // })

  render() {
    const isLoading = this.state.isLoading
    const ifSearchNull = this.state.webImage.length > 0 && !isLoading

    // console.log(this.state.searchQuery)
    // console.log(this.fetchWebImage)
    // const webformatUrl = fetchImage().then((data) => data.data.hits.map((el) => el))
    // console.log(fetchImage().then((data) => data.data.hits.map((el) => el.webformatURL)))
    // console.log(webformatUrl)
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        {!isLoading && <ImageGallery webformatUrl={this.state.webImage} />}
        {ifSearchNull && <Button look={this.state.searchQuery} onClick={this.fetchImage} />}
      </div>
    )
  }
}

export default App
