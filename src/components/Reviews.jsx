import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [filmReview, setFilmReview] = useState([]);

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
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => {
        // console.log(response.results);
        setFilmReview(response.results);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <>
      {filmReview.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
      <ul>
        {filmReview.map(({ author, id, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content} </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
