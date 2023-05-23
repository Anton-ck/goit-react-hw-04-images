/* eslint-disable no-unused-expressions */
import { fetchImages } from './API/Api';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppWrapper } from './App.styled';
import Searchbar from './SearchBar/SearchBar';
import Gallery from './ImageGallery/ImageGallery';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import { SearchMessage } from './TextMessages/TextMessages';
import Loader from './Loader/Loader';
import Cat from './Cat/Cat';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    (async () => {
      if (!searchQuery) {
        return;
      }
      try {
        setIsLoading(true);

        const collectionImg = await fetchImages(searchQuery, page);

        setImages(prevImages => [...prevImages, ...collectionImg.hits]);
        setTotalResults(collectionImg.total);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, searchQuery]);

  const handleFormSubmit = currentQuerySearch => {
    console.log(currentQuerySearch);
    if (currentQuerySearch === searchQuery) {
      return;
    }
    setSearchQuery(currentQuerySearch);
    setPage(1);
    setImages([]);
    setTotalResults(0);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppWrapper>
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      <Gallery images={images}></Gallery>
      {!images.length && !isLoading && !page && (
        <SearchMessage text="Please type anything, for search anything" />
      )}
      {isLoading && <Loader />}
      {!images.length && page === 1 && !isLoading && <Cat />}
      {images.length > 0 && totalResults > images.length && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
      <ToastContainer></ToastContainer>
    </AppWrapper>
  );
};
