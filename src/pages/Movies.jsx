import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/Searchbar/Searchbar';
import { lazy, Suspense } from 'react';
const FilmList = lazy(() => import("../components/FilmList/FilmList"));

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilm, setSearchFilm] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const name = searchParams.get('query');
    if (name !== null) setSearchQuery(name);
  }, [searchParams]);

  const handlerSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODhiZjEzNWFhNGUwYjc5YjdjNjg4MzViZDc3NTk5YyIsInN1YiI6IjY0MzY3Y2IwOTQ1ZDM2MDEyNThhOGViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l0uX6X8nk7JVIoTKrSS00KxXQjcoXQ2Z1FOCZWkxi6A',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => setSearchFilm(response.results))
      .catch(err => console.error(err));
  }, [searchQuery]);

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar onSubmit={handlerSubmit} />
        <FilmList films={searchFilm}> </FilmList>
      </Suspense>
    </main>
  );
};

export default Movies;
