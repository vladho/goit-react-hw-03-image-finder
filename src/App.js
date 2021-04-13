import "./App.css";
import { Component } from "react";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Searchbar from "./Components/Searchbar/Searchbar";
import servicesApi from "./services/gallery-api";
import Button from "./Components/Button/Button";
import Loader from "react-loader-spinner";

class App extends Component {
  state = {
    image: [],
    searchQuery: "",
    isLoading: false,
    currentPage: 1,
    error: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImage();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      image: [],
      searchQuery: query,
      currentPage: 1,
    });
  };

  fetchImage = () => {
    const { searchQuery, currentPage } = this.state;
    const data = { searchQuery, currentPage };
    this.setState({ isLoading: true });

    servicesApi
      .fetchImage(data)
      .then((data) =>
        this.setState((prevState) => ({
          image: [
            ...prevState.image,
            ...data.data.hits.map((el) => ({ ...el })),
          ],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .then(() => this.scroll())
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  render() {
    const isLoading = this.state.isLoading;
    const ifSearchNull = this.state.image.length > 0 && !isLoading;
    const error = this.state.error;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <h1>Ooops what's wrong</h1>}
        <ImageGallery imageURL={this.state.image} />
        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        {ifSearchNull && (
          <Button look={this.state.searchQuery} onClick={this.fetchImage} />
        )}
      </div>
    );
  }
}

export default App;
