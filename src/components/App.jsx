import { fetchImages } from './API/Api';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppWrapper } from './App.styled';
import Searchbar from './SearchBar/SearchBar';
import Gallery from './ImageGallery/ImageGallery';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import { SearchMessage } from './TextMessages/TextMessages';
import Loader from './Loader/Loader';
import Cat from './Cat/Cat';

export class App extends Component {
  state = {
    images: [],
    page: 0,
    searchQuery: '',
    isLoading: false,
    totalResults: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      try {
        this.setState({ isLoading: true });

        const collectionImg = await fetchImages(searchQuery, page);
        console.log(collectionImg);
        this.setState(prevState => ({
          images: [...prevState.images, ...collectionImg.hits],
          totalResults: collectionImg.total,
        }));
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }



  handleFormSubmit = searchQuery => {
    console.log(searchQuery);
    if (searchQuery === this.state.searchQuery) {
      return;
    }

    this.setState({ searchQuery, page: 1, images: [], totalResults: 0 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, page, totalResults } = this.state;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <Gallery images={images}></Gallery>
        {!images.length && !isLoading && !page && (
          <SearchMessage text="Please type anything, for search anything" />
        )}
        {isLoading && <Loader />}
        {!images.length && page === 1 && !isLoading && <Cat />}
        {images.length > 0 && totalResults > images.length && (
          <LoadMoreButton onClick={this.handleLoadMore} />
        )}
        <ToastContainer></ToastContainer>
      </AppWrapper>
    );
  }
}
