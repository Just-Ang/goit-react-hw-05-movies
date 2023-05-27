import { Route, Routes, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './App.module.css';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Film = lazy(() => import('pages/Film/Film'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
        <NavLink
          to="/goit-react-hw-05-movies"
          className={({ isActive }) => (isActive ? css.active : 'inactive')}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? css.active : 'inactive')}
        >
          Movies
        </NavLink>
        
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Film />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
