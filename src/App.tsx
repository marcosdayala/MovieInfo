import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import ListMovies from './components/ListMovies';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListMovies />} />
        <Route path={`/:movieId`} element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
