import { useState, useEffect } from 'react';
//import FilmList from 'components/FilmList/FilmList';
import { lazy, Suspense } from 'react';

const FilmList = lazy(() => import('../components/FilmList/FilmList'));

const Home = () => {
  const [filmList, setFilmList] = useState([]);

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
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(data => {
        setFilmList(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main>
      <h1
        style={{
          marginLeft: 60,
          fontSize: 60,
        }}
      >
        Trending today
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <FilmList films={filmList}> </FilmList>
      </Suspense>
    </main>
  );
};

export default Home;
