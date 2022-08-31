import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import ListMovies from './components/ListMovies';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<ListMovies />} />
          <Route path={`/:movieId`} element={<MovieDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
