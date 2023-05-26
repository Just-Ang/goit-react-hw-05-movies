import { Route, Routes, NavLink } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Film from 'pages/Film/Film';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import css from './App.module.css';

export const App = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',

        color: '#010101',
      }}
    >
      <nav className={css.nav}>
        <NavLink to="/" className={({ isActive }) => (isActive ? css.active : 'inactive')} >Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? css.active : 'inactive')}  >Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Film />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};