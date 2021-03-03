import "./App.css"
import { Component } from "react"
import ImageGallery from "./Components/ImageGallery/ImageGallery"
import Searchbar from "./Components/Searchbar/Searchbar"
import servicesApi from "./services/gallery-api"

class App extends Component {
  state = {
    webImage: [],
  }

  componentDidMount = () => {
    servicesApi.fetchImage().then((data) =>
      this.setState(
        // console.log(data.data.hits)
        {
          webImage: [...data.data.hits.map((el) => el.webformatURL)],
        }
      )
    )
  }
  onChangeQuery = (query) => {
    console.log(query)
    this.setState({
      searchQuery: query,
    })
  }

  // this.setState({
  //   webImage: servicesApi.fetchImage().then((data) => data.data.hits.map((el) => el)),
  // })

  render() {
    console.log(this.state)
    // console.log(this.fetchWebImage)
    // const webformatUrl = fetchImage().then((data) => data.data.hits.map((el) => el))
    // console.log(fetchImage().then((data) => data.data.hits.map((el) => el.webformatURL)))
    // console.log(webformatUrl)
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery webformatUrl={this.state.webImage} />
      </div>
    )
  }
}

export default App
