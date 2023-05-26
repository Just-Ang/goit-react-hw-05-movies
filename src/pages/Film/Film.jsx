import { useParams } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Film.module.css'

const Film = () => {
  const [filmEl, setFilmEl] = useState('');
  const [genresEl, setGenresEl] = useState([]);
  const [data, setData] = useState('')
  const { id } = useParams();

  const location = useLocation();
  //console.log(location);

  const backUrl = location.state?.from ?? '/movies';

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODhiZjEzNWFhNGUwYjc5YjdjNjg4MzViZDc3NTk5YyIsInN1YiI6IjY0MzY3Y2IwOTQ1ZDM2MDEyNThhOGViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l0uX6X8nk7JVIoTKrSS00KxXQjcoXQ2Z1FOCZWkxi6A',
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        setGenresEl(response.genres);
        setData(response.release_date.slice(0, 4))
        setFilmEl(response);
      })
      .catch(err => console.error(err));
  }, [id]);


  return (
    <main>
      <Link className={css.button} to={backUrl}> &#8592; Go back</Link>
      <div className={css.cardFilm}>
        <img className={css.img} src={`https://image.tmdb.org/t/p/w200${filmEl.poster_path}`} alt={filmEl.title} />
        <div>
          <h2>{filmEl.title} ({data})</h2>
          <p>User Score {filmEl.vote_average}</p>
          <h3>Overview</h3>
          <p>{filmEl.overview}</p>
          <h3 >Genres</h3>
          <div className={css.genres}>
            {genresEl.map(({ name, id }) => (
              <p key={id}>{name}</p>
            ))}
          </div>
        </div>
      </div>

      <div className={css.infoAdd}>
        <h3>Additional information</h3>

        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

export default Film;
