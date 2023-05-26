import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';




const Cast = () => {
  const [filmCast, setFilmCast] = useState([]);

  const { id } = useParams();

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
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setFilmCast(response.cast);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <>
      {filmCast.length === 0 && <div>No information</div>}
      <ul>
        {filmCast.map(({ name, id, profile_path, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character} </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
