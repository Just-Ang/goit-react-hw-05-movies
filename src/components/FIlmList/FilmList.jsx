
import { Link,  useLocation } from 'react-router-dom';
import css from './FilmList.module.css'

export const FilmList = ({ films }) => {

    const location = useLocation();
  
    
  return (
    <ul className={css.list}>
      {films.map(({ title, id }) => (
        <li  key={id}>
          <Link className={css.item} to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
